---
layout: "post"
title:  "How we wrote Telegram ChatBot to keep track of co-working"
date: 2018-11-25 00:00:00
permalink: how-we-wrote-telegram-chat-bots
tags: ['java', 'chat-bots']
---

I guess, everyone know knows what are chat bots. Do do I, I was looking for some idea of chat bots for many months and finally, I ended up with an idea for my co-working, which I made with my friends and where I am currently spending most of my life.

During the month, we collect a list of expenses, then sum them up, divide by the number of people working in the office and then, finally, reach to every individual and ask to pay for general expenses. We were tracking expenses in the  Google Spreadsheet and it was working fine, in general. However, I noticed that in most of the cases, people are too lazy to go into the spreadsheet and put their expenses there. So my obsession of being up to date with modern technologies and a tiny small problem with office expenses met together, I invested 3-4 hours of my time on writing a chat bot and now we are using it.

I decided to stick with [Telegram](https://telegram.org/), a messenger which became very popular within the last years. I used Java as a programming language. Telegram has an API for chat bots, so I made a research and found out that there are couple of libraries and one of them is [TelegramBots](https://github.com/rubenlagus/TelegramBots) project. I choosen TelegramBots, just because I liked it, no heavy technical decision was made there.

### <a href="#functionality" name="functionality"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Key features

Before I started writing Telegram ChatBot which keeps track of co-working expenses, I wanted one clear goal: have a transparent place where people can go and put their expenses for co-working, no matter if it's me who is paying money for cleaning company, or it's my friend who is buying tea for everyone in the office. A the end of the month, ChatBot will do the required calculation and give an extensive message which will show many people owe money to you and if you were not spending any money, ChatBot will give you a list of people for whom you have to give money. In general, screenshot of such message look like:

![](assets/images/telegram-bots/spend_chat_bot_screenshot.png){: .center-image }


### <a href="#createchatbot" name="createchatbot"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Creating Chat Bot using BotFather

![](assets/images/telegram-bots/bot_father.png){: .center-image }

In Telegram, you create Chat Bots by talking to the main Bot, Bot Father. I am not going to explain how to create a Chat Bot in Telegram, visit [/bots](https://core.telegram.org/bots) section on Telegram code website, they have an extensive tutorials.

The key idea - you should create a chat bot, name it and receive token, which we will use in the later sections.


### <a href="#writingchatbot" name="writingchatbot"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Writing Chat Bot

If you visit [Getting Started](https://github.com/rubenlagus/TelegramBots/wiki/Getting-Started) section of TelegramBots, you will notice that in order to implement a Chat Bot in Java, you need to create a class and extend from **TelegramLongPollingBot** and implement three methods:

```
public class MyAmazingBot extends TelegramLongPollingBot {
    @Override
    public void onUpdateReceived(Update update) {
        // TODO
    }

    @Override
    public String getBotUsername() {
        // TODO
        return null;
    }

    @Override
    public String getBotToken() {
        // TODO
        return null;
    }
}
```

In **getBotToken** method you need to return the token which you got from BotFather, **getBotUsername** returns the name of your Bot and **onUpdateReceived** is the method that is used for interaction with users. The idea is very simple - whenever someones writes a message to your Chat Bot, **onUpdateReceived** is called with a message, your duty is to return a message to the user. I personally use BorFather format and provide a `/help` section which user can visit to see the list of commands:

Why parent class has **LongPollingBot** in the end? Because it inifinitely polls Telegram API and checks whether there's someone who wrote a message recently. In my case, it means that I can write a chat bot and host it on a Raspberry PI, which is very cheap. Since chat bot will be used by three people, I don't worry about performance.

```
Hi, you are talking with cleaning Chat Bot

Informational commands
/turn - Whos turn to clean the bathroom
/history - The history of cleanups
/unsubscribe - unsubscribe to cleaning events
/help - get all commands

When I cleaned the bathroom
/clean - Create a new cleaning event

The bathrooom is dirty
/notify - notify the person whos turn to clean the bathroom
```

### <a href="#database" name="database"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Database

In order to keep events, I wanted to store events somewhere. I was thinking about keeping it simple and stupid and storing everything in a txt file, but then I found [mapDB](https://github.com/jankotek/mapdb), a library, which has in - memory and file databases. I can specify a file and use it as a database. My database is not very important for me and if I lose data - nothing will happen, I can recreate the events, if needed.

The steps for configuring MapDB are very straighforward, you need to:
* Add a dependency into Maven
* Initialize DB
* Create or Open structures

```
        DB db = DBMaker
                .fileDB("/Users/ivanursul/git/ursul_bot/src/main/resources/file.db")
                .make();
                
        NavigableSet<String> cleaningEvents cleaningEvents = db
                .treeSet("cleaningEvents")
                .serializer(Serializer.STRING)
                .createOrOpen();
```

I was too lazy to figure out how to add a custom serializer so I kep everything as String and changed Dao layer to have auto serialization/deserialization.

### <a href="#arechitecture" name="architecture"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Architecture

Since I have multiple commands, I sticked to creating a processor for each commmand:
* TurnProcessor
* HistoryProcessor
* UnsubscribeProcessor
* SubscribeProcessor
* HelpProcessor
* CleanProcessor
* NotifyProcessor

In Java, it sits into a single method:

```
    private Processor getProcessor(String message) {
        Processor processor;
        switch (message) {
            case "/start":
                processor = new DefaultProcessor(dao);
                break;
            case "/help":
                processor = new DefaultProcessor(dao);
                break;
            case "/spends":
                processor = new CalculateSpendsProcessor(dao);
                break;
            case "/previousspends":
                processor = new CalculatePreviousMonthsSpendsProcessor(dao);
                break;
            case "/nextspends":
                processor = new CalculateNextMonthsSpendsProcessor(dao);
                break;
            case "/removelastdonate":
                processor = new RemoveLastDonateProcessor(dao);
                break;
            default:
                processor = new FuzzyProcessor(dao);
        }

        return processor;
    }
```

So, for each command I have a special processor, which knows what to do with the command. When I can't figure our what user is typing - I am using a FuzzyProcessor, a special processor which tries to analyze users's message and if it is able to recognize the command - it processes it. I don't use machine learning, I don't use text recognition instruments, all I do is analyze text for certain patterns.

One particular example of such processor is DonatorsProcessor:

```
public class DonatorsProcessor extends DefaultProcessor {
    private static final Logger logger = LoggerFactory.getLogger(DonatorsProcessor.class);

    public DonatorsProcessor(Dao dao) {
        super(dao);
    }

    @Override
    public List<BotApiMethod<Message>> process(Update update) {
        String message = dao.getDonators().stream()
                .filter(donator -> Objects.nonNull(donator))
                .map(donator -> donator.constructName())
                .collect(Collectors.joining("\n"));

        logger.info("Donators: {}", message);

        return Collections.singletonList(
                new SendMessage() // Create a SendMessage object with mandatory fields
                        .setChatId(update.getMessage().getChatId())
                        .enableMarkdown(true)
                        .setText(message + buildHelpMessage())
        );
    }
}
```

What it does it gives a list of people, that are splitting expenses between themselves.

### <a href="#deployment" name="deployment"><i class="fa fa-link anchor" aria-hidden="true"></i></a> Deployment

Our application is written in Java, has a Maven pom.xml, we package jar  together with all dependencies that we have 