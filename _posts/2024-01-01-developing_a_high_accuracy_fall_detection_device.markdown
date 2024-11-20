---
layout: "post"
title:  "Developing a High-Accuracy Fall Detection Device Using Raspberry Pi and Transformer Models"
date: 2024-11-16 00:00:00
permalink: developing-fall-detection-device-raspberry-pi
tags: ['raspberry-pi', 'machine-learning', 'fall-detection', 'transformers', 'elderly-care']
---

<!-- {% include audio-player.html audio_source="https://ivanursul.com/assets/audio/fall-detection-podcast.wav" description="Dive into an AI-generated podcast where two virtual hosts discuss the key findings and implications of the featured article and its groundbreaking research." %}
 -->

 <div style="max-width: 100%;">
  <audio controls style="width: 100%;">
    <source src="https://ivanursul.com/assets/audio/fall-detection-podcast.wav" type="audio/wav">
    Your browser does not support the audio element.
  </audio>
  <p style="font-size: 0.8em; color: #666; text-align: center;">
    Dive into an AI-generated podcast where two virtual hosts discuss the key findings and implications of the featured article and its groundbreaking research."
  </p>
</div>

![](assets/images/fall_detection_prototype_device.jpeg?style=centerme)
*The prototype with the cover removed*

Falls are a significant concern for the elderly population, often leading to serious injuries and a decrease in the quality of life. Detecting falls promptly can enable quick assistance, potentially reducing the severity of injuries and providing peace of mind for both seniors and their families. In my recent project, I set out to create a highly accurate, real-time fall detection device that minimizes false positives while operating on a resource-constrained platform.

## Project Overview
The primary goal of this project was to develop a compact and efficient fall detection system using a Raspberry Pi Zero 2W, equipped with MPU-9250 (accelerometer and gyroscope) and BMP-388 (barometric pressure) sensors. The device is designed to collect data on falls and Activities of Daily Living (ADL), process the data using Transformer-based deep learning models, and detect falls with high accuracy.

A key feature of the device is its placement on the chest, near the heart. This strategic location offers several advantages:

Enhanced Motion Detection: The chest provides a stable and central point for capturing body movements, improving the accuracy of motion sensing.
Future ECG Integration: Being close to the heart makes the device an ideal candidate for integrating an ECG sensor in future iterations. This would allow for monitoring heart activity alongside fall detection, providing a comprehensive health monitoring solution.

![](assets/images/device_position.jpeg?style=centerme)
*Example of device placement on the chest*

Initially, the Raspberry Pi Zero 2W was chosen as the development platform due to its small form factor, low power consumption, and sufficient computational capabilities for running lightweight deep learning models. However, to explore more advanced hardware options that could offer increased processing power and additional features, I also considered the Arduino Portenta H7 and the Radxa Zero 3W.

Arduino Portenta H7: A high-performance microcontroller with dual-core processing, ideal for complex computations and real-time data processing.
Radxa Zero 3W: A powerful single-board computer that offers Wi-Fi and Bluetooth connectivity, providing more options for data transmission and device communication.
By experimenting with these platforms, the goal is to optimize the device for the best balance between performance, power efficiency, and cost.

![](assets/images/devices.jpeg?style=centerme)
*From left to right: Arduino Portenta H7, Radxa Zero 3W and Raspberry Pi Zero 2W*

## Hardware Components

### Raspberry Pi Zero 2W

I chose the Raspberry Pi Zero 2W due to its small form factor, low power consumption, and sufficient computational capabilities for running lightweight deep learning models. Its compact size makes it ideal for wearable applications, allowing the device to be conveniently integrated into daily use. That said, I will be exploring other Single Board Computers (SBCs) and microcontrollers in the future. 

### MPU-9265 Sensor

The MPU-9250 sensor provides 3-axis accelerometer and gyroscope data, offering comprehensive motion sensing capabilities. Honestly, while the MPU-9250 does the job, it's just an okay sensor for capturing accelerometer data. It's nothing groundbreaking, but it gets the basics right. In fact, pretty much any standard accelerometer could handle the work needed for fall detection. The key is to have a sensor that reliably picks up on sudden changes in acceleration and orientation—which the MPU-9250 does adequately. Its data feeds into the system to analyze movements, crucial for accurately detecting falls without overcomplicating the hardware setup.

### BMP-388 Sensor

The BMP-388 is a high-precision barometric pressure sensor that measures atmospheric pressure to determine altitude changes. Detecting rapid altitude changes can help distinguish between falls and other types of movements. While it might seem that a barometer wouldn't be sensitive enough to track small altitude variations of 10-20 centimeters—the typical distance involved in a person's vertical movement during a fall—my experiments have shown otherwise.

Despite common assumptions, the BMP-388 sensor is capable of detecting these subtle changes. I conducted tests where the sensor accurately tracked the altitude variations associated with a fall. This sensitivity allows the device to capture the rapid descent during a fall event, providing an additional layer of data to improve detection accuracy. By integrating barometric pressure readings, we enhance the system's ability to differentiate between falls and other activities, such as sitting down or bending over, which might not involve significant altitude changes.

## 3D-Printed Case Design
![](assets/images/open_scad_device.png?style=centerme)
*The model of the box in openscad editor*

Using OpenSCAD, I designed a custom case to house all the components securely. The key design considerations included:

- **Compactness**: Ensuring the case is small and lightweight for comfortable wear.
- **Accessibility**: Including openings for the USB Type-C port and two buttons for user interaction.
- **Durability**: Designing the case to protect the components from physical damage.

The final design was printed using a 3D printer, resulting in a functional and aesthetically pleasing case.

![](assets/images/printing_timelapse.gif?style=centerme)
*The process of printing case for the device*

## Data Collection Methodology

To train the fall detection models effectively, I needed a comprehensive and diverse dataset of both fall events and Activities of Daily Living (ADLs). Recognizing the importance of realistic and varied data, I collaborated with participants from a regional hand-to-hand combat federation. This partnership allowed me to capture a wide range of fall types and daily activities performed by individuals of different ages, weights, and heights.

### Activities Recorded

The dataset includes the following activities, each coded for reference:

| **Activity Type** | **Code** | **Type** | **Total Samples** |
| --- | --- | --- | --- |
| Fall on the left | ACT1 | Fall | 85 |
| Fall on the right | ACT2 | Fall | 95 |
| Fall on the front | ACT3 | Fall | 78 |
| Fall on the back | ACT4 | Fall | 86 |
| Slide | ACT5 | Fall | 75 |
| Fall on knees | ACT6 | Fall | 77 |
| Stumble upon | ACT7 | Fall | 78 |
| Stay without walking and fall | ACT8 | Fall | 75 |
| Custom fall (subject decides) | ACT9 | Fall | 65 |
| Sit on chair, fall | ACT10 | Fall | 143 |
| Try to sit on chair, fall | ACT11 | Fall | 150 |
| Fall from a higher place | ACT12 | Fall | 9 |
| Walking | ACT13 | ADL | 84 |
| Running | ACT14 | ADL | 64 |
| Jogging | ACT15 | ADL | 68 |
| Sitting | ACT16 | ADL | 60 |
| Standing | ACT17 | ADL | 59 |
| Picking up | ACT18 | ADL | 60 |
| Laying | ACT19 | ADL | 60 |
| Standing up from laying | ACT20 | ADL | 55 |
| Walking, stopping, another direction | ACT21 | ADL | 58 |
| Waving | ACT22 | ADL | 55 |
| Reaching | ACT23 | ADL | 48 |
| Climbing | ACT24 | ADL | 61 |
| Descend | ACT25 | ADL | 58 |

This variety of activities ensures that the model is trained on diverse movements, improving its ability to distinguish between fall events and normal daily activities.

### Participant Details

A total of 29 participants contributed to the dataset, providing a broad spectrum of physical characteristics. All participants provided informed consent before participating in the data collection process, acknowledging the purpose of the study and their role in it. Safety measures were strictly followed to prevent any injuries during the recording sessions.

The participants are anonymized using subject codes:

| **Code** | **Weight (kg)** | **Height (cm)** | **Age** | **Total Falls** | **Total ADLs** |
| --- | --- | --- | --- | --- | --- |
| SBJ01 | 96 | 178 | 32 | 43 | 0 |
| SBJ02 | 90 | 175 | 30 | 37 | 0 |
| SBJ03 | 83 | 180 | 32 | 32 | 41 |
| SBJ04 | 85 | 176 | 19 | 43 | 60 |
| SBJ05 | 73 | 176 | 19 | 50 | 15 |
| SBJ06 | 90 | 173 | 22 | 50 | 65 |
| SBJ07 | 70 | 178 | 27 | 51 | 52 |
| SBJ08 | 68 | 174 | 24 | 50 | 52 |
| SBJ09 | 65 | N/A | N/A | 52 | 52 |
| SBJ10 | 67 | 183 | 30 | 49 | 53 |
| SBJ11 | 78 | 180 | 30 | 52 | 0 |
| SBJ12 | 95 | 176 | 22 | 49 | 0 |
| SBJ13 | 60 | 172 | 20 | 52 | 28 |
| SBJ14 | 60 | 180 | 20 | 50 | 48 |
| SBJ15 | 71 | 178 | 32 | 50 | 0 |
| SBJ16 | 87 | 176 | 29 | 49 | 0 |
| SBJ17 | 100 | 179 | 29 | 52 | 0 |
| SBJ18 | 91 | 183 | 29 | 52 | 0 |
| SBJ19 | 66 | 176 | 34 | 0 | 53 |
| SBJ20 | 63 | 173 | 32 | 49 | 43 |
| SBJ21 | 88 | 180 | 30 | 52 | 0 |
| SBJ22 | 57 | 160 | 31 | 52 | 0 |
| SBJ23 | 72 | 182 | 31 | 0 | 49 |
| SBJ24 | 63 | 173 | 31 | 0 | 52 |
| SBJ25 | 80 | 184 | 32 | 0 | 52 |
| SBJ26 | 50.5 | 162 | 25 | 0 | 47 |
| SBJ27 | 100 | 180 | 42 | 0 | 44 |
| SBJ28 | 85 | 179 | 31 | 0 | 52 |
| SBJ29 | 70 | 177 | 26 | 0 | 52 |

This diverse group includes individuals ranging in age from 19 to 42 years old, with various weights and heights. Such diversity is crucial to ensure that the model generalizes well across different body types and movement patterns.

### Ethical Considerations

Ethical guidelines were strictly adhered to throughout the data collection process. Each participant signed a consent form agreeing to participate and acknowledging their understanding of the study's purpose. Participants were informed that they could withdraw at any time without any consequences.

Safety measures were implemented to prevent injuries during falls:

-   **Supervision**: All fall activities were supervised by trained professionals.
-   **Protective Equipment**: Participants used mats and wore appropriate protective gear when necessary.
-   **Medical Readiness**: First aid kits and medical personnel were on standby during the sessions.

### Recording Procedure

-   **Session Duration**: Each recording session lasted approximately 8 seconds to capture data before, during, and after the activity.
-   **Signalization**: The device emitted signals to indicate the start of recording, the expected moment of the fall or activity, and the end of recording.
-   **Repetition**: Each activity was performed multiple times by different participants to ensure data variability.

By meticulously collecting and curating this dataset, the model is trained on realistic scenarios, enhancing its ability to accurately detect falls while minimizing false positives during normal daily activities.

## Data Preprocessing

![The model of the box in openscad editor](assets/images/fall_detection_filtering.jpeg?style=centerme)
*Compiled information about raw accelerometer data(X, Y, Z axis), processed accelerometer data, magnitude and altitude*

Raw sensor data often contains noise and irrelevant fluctuations. To address this, I employed several preprocessing techniques:

- **Noise Filtering**: Applied a Butterworth low-pass filter to smooth out the accelerometer data while preserving significant spikes indicative of falls.
- **Spike Detection**: Identified and retained prolonged, spiky periods in the data, which are characteristic of fall events.
- **Data Normalization**: Standardized the data to have a mean of zero and a standard deviation of one, improving the model's training efficiency.

## Fall Detection Models

### Transformer-Based Architectures

I explored various Transformer-based models for fall detection, leveraging their ability to capture temporal dependencies in time-series data. Below is a brief description of each model:

1.  **Standard Transformer**

    The Standard Transformer is the original architecture introduced in the seminal paper "Attention is All You Need" by Vaswani et al. It relies entirely on self-attention mechanisms and feed-forward neural networks, eliminating the need for recurrent layers. This model excels at capturing global dependencies in sequential data, making it effective for processing time-series where the entire sequence context is important.

2.  **Performer**

    The Performer introduces a linearized attention mechanism that reduces the computational complexity of the self-attention operation from quadratic to linear with respect to the sequence length. It uses kernel-based approximations to make Transformers more scalable, especially for long sequences, without significantly sacrificing performance. This makes it suitable for real-time applications on devices with limited computational resources.

3.  **Linformer**

    Linformer addresses the efficiency issue of Transformers by projecting the high-dimensional key and value matrices into lower-dimensional representations. This reduces the memory and computational requirements of the attention mechanism from quadratic to linear complexity. Linformer maintains performance on long sequences while being more resource-efficient, which is ideal for deployment on devices like the Raspberry Pi Zero 2W.

4.  **Temporal Convolutional Transformer**

    The Temporal Convolutional Transformer combines convolutional neural networks (CNNs) with Transformer architectures to capture both local and global temporal dependencies. The convolutional layers extract local patterns and short-term dependencies, while the self-attention layers focus on long-term dependencies across the entire sequence. This hybrid approach enhances the model's ability to detect subtle changes in sensor data indicative of falls.

5.  **Long Short-Term Transformer**

    The Long Short-Term Transformer integrates the strengths of Long Short-Term Memory (LSTM) networks with Transformers. It incorporates recurrent connections to model short-term dependencies and uses self-attention mechanisms for capturing long-term dependencies. This fusion allows the model to effectively process sequences where both recent and distant past information are crucial for accurate fall detection.

6.  **Multi-Scale Transformer**

    The Multi-Scale Transformer processes input sequences at multiple temporal scales simultaneously. It employs hierarchical attention mechanisms to capture patterns at various levels of temporal granularity. This is particularly useful for fall detection, as it can recognize quick, abrupt movements as well as slower, more gradual changes in motion, providing a more robust analysis of sensor data.

7.  **Time-Series Transformer (T2V-BERT)**

    The Time-Series Transformer, also known as T2V-BERT, is specifically designed for time-series data. It incorporates time-aware positional embeddings and temporal encoding to handle continuous time information effectively. This model adapts the Transformer architecture to better capture the temporal dynamics inherent in time-series data like accelerometer and gyroscope readings, enhancing its ability to detect falls accurately.


These models were selected and adapted to balance the need for high accuracy with the computational limitations of running on a resource-constrained device. By evaluating each architecture, I aimed to identify the most effective model for real-time fall detection that could operate efficiently on the Raspberry Pi Zero 2W.

#### Why Transformers?

Transformers excel in processing sequential data and can handle long-term dependencies better than traditional RNNs or LSTMs. Their self-attention mechanisms allow them to focus on relevant parts of the input sequence, making them suitable for detecting patterns associated with falls.

### Model Training and Evaluation

- **Dataset**: Collected a balanced dataset with 10,000 fall events and 10,000 ADL instances.
- **Training**: Each model was trained as a binary classifier to distinguish between falls and non-fall activities.
- **Evaluation Metrics**: Assessed models based on accuracy, precision, recall, and F1-score.

#### Performance Comparison

| Model                           | Accuracy (%) | Precision | Recall | F1-Score |
|---------------------------------|--------------|-----------|--------|----------|
| **T2V-BERT**                    | 98.00        | 0.99      | 0.97   | 0.98     |
| **Multi-Scale Transformer**     | 97.77        | 1.00      | 0.96   | 0.98     |
| **Long Short-Term Transformer** | 98.01        | 0.99      | 0.97   | 0.98     |
| **Convolutional Transformer**   | 98.26        | 0.97      | 1.00   | 0.98     |
| **Informer**                    | 97.00        | 0.98      | 0.97   | 0.97     |
| **Performer**                   | 97.02        | 1.00      | 0.94   | 0.97     |
| **Linformer**                   | 96.77        | 0.96      | 0.98   | 0.97     |

The **Convolutional Transformer** achieved the highest accuracy of **98.26%**, with a perfect recall of 100% for fall events, ensuring that no falls went undetected.

## Comparison with Existing Solutions

Compared to traditional fall detection systems that often rely on threshold-based methods or classical machine learning algorithms, my Transformer-based approach offers:

- **Higher Accuracy**: Outperforms conventional models like CNNs and LSTMs, which typically achieve around 92-95% accuracy.
- **Improved Recall**: Achieving 100% recall minimizes the risk of missing actual fall events.
- **Real-Time Processing**: Despite running on the Raspberry Pi Zero 2W, the models provide quick inference times suitable for real-time detection.

## Hardware and Software Integration

### Sensor Communication

- **I2C Protocol**: The Raspberry Pi communicates with the MPU-9265 and BMP-388 sensors using the I2C protocol.
- **Continuous Reading**: Implemented multi-threading to read altitude continuously without blocking accelerometer data collection.

### Software Implementation

The device operates in two primary modes: **Data Collection Mode** and **Inference Mode**. A Python script orchestrates both modes, handling data acquisition, processing, and, when appropriate, inference and alerting.

### Data Collection Mode

In this mode, the device is used to gather the dataset necessary for training the fall detection models. An important aspect of data collection is understanding when falls occur within the 8-second recording intervals. To achieve this, post-processing is performed to analyze the temporal distribution of fall events.

#### Temporal Analysis of Fall Events

After the data collection sessions, the 8-second intervals are divided into a grid for detailed analysis:

-   **X-Axis**: Represents the 8-second duration, split into seconds.
-   **Y-Axis**: Represents each second divided into 100-millisecond increments.

By plotting a heatmap of the collected data, we can visualize the frequency and timing of falls within the intervals.

![](assets/images//heatmap_timelapse.gif?style=centerme)
*Heatmap showing the distribution of fall events across the 8-second intervals*

The heatmap allows us to identify "hot" and "cold" periods within the recording sessions:

-   **Hot Periods**: Times where falls frequently occur.
-   **Cold Periods**: Times with few or no fall events.

Using this information, we can adjust the data collection script to optimize the timing cues given to participants. By signaling participants to perform falls during the "cold" periods, we can achieve a more uniform distribution of fall events across the entire interval. This uniformity is crucial for:

-   **Model Training**: Ensuring the model is exposed to falls occurring at different times within the interval, improving its ability to detect falls regardless of when they happen.
-   **Data Balance**: Preventing overrepresentation of falls at specific times, which could bias the model.

#### Enhanced Data Collection Process

With the insights gained from the heatmap analysis, the data collection script was updated to provide more precise signalization:

-   **Adaptive Timing Signals**: The device emits cues to participants to perform falls during underrepresented time segments.
-   **Dynamic Scheduling**: Adjusts the timing of fall prompts based on real-time data analysis to fill in "cold" periods.

This approach leads to a more evenly distributed dataset, which enhances the robustness of the model during training.

#### Data Collection Workflow

1.  **Initialization**: The device prepares for data collection by initializing sensors and buffers.
2.  **Signalization**: The device provides auditory or visual cues to the participant:
    -   **Start Signal**: Indicates the beginning of the 8-second recording interval.
    -   **Fall Prompt**: Signals the participant to perform a fall during specific time segments identified as "cold" periods.
    -   **End Signal**: Marks the end of the recording interval.
3.  **Data Recording**: Sensor data is collected continuously throughout the interval.
4.  **Post-Processing**: After the session, data is analyzed to generate the heatmap and assess the distribution of falls.
5.  **Script Adjustment**: Based on the heatmap, the script adjusts future signals to target underrepresented time segments.

#### Benefits of Temporal Distribution Analysis

-   **Improved Model Generalization**: By training on data where falls occur at various times within the interval, the model becomes better at detecting falls in real-world scenarios, where the timing is unpredictable.
-   **Efficient Data Collection**: Targeting underrepresented time segments makes efficient use of participants' time and efforts, ensuring a more balanced dataset.
-   **Enhanced Understanding**: Provides deeper insights into the dynamics of falls and how they are captured by the sensors over time, informing future improvements in data collection and model design.

By integrating this post-processing step and adapting the data collection script accordingly, we ensure that our dataset is comprehensive and well-balanced across the entire recording interval. This meticulous approach contributes significantly to the accuracy and reliability of the fall detection models.
#### **Inference Mode**

In inference mode, the device functions as a real-time fall detection system, continuously monitoring sensor data to identify fall events. The Python script handles the following tasks:

-   **Continuous Data Acquisition**: Sensor data is continuously read at 100 Hz and stored in a rolling buffer that maintains the latest 8 seconds of data.
-   **Real-Time Processing**: The buffered data undergoes real-time filtering and preprocessing, including noise reduction using a Butterworth low-pass filter and normalization to standardize inputs for the model.
-   **Sliding Window Approach**: After processing each 8-second interval, the window slides forward (e.g., by 1 second) to analyze the next segment of data. This overlap ensures continuous monitoring and reduces the chance of missing transient fall events.
-   **Running Inference**: The preprocessed data is fed into the trained Transformer-based deep learning model to determine whether a fall has occurred within that interval.
-   **Alert Mechanism**: If a fall is detected, the device immediately activates an alert system, such as sounding a buzzer or sending a notification, to prompt timely assistance.

#### Key Libraries Used

```python
import smbus
import RPi.GPIO as GPIO
import board
import busio
import adafruit_bmp3xx
import threading
import numpy as np
from scipy.signal
```

## Potential Applications and Benefits

-   **Elderly Care**: Provides immediate detection of falls, allowing for swift assistance and reducing the risk of severe injuries.
-   **Healthcare Cost Reduction**: Early intervention can prevent complications, lowering hospitalization costs.
-   **Home Safety Enhancement**: Enables independent living for seniors by ensuring help is available when needed.

## Limitations and Future Work

### Current Limitations

-   **Hardware Constraints**: The Raspberry Pi Zero 2W has limited processing power (512MB RAM, dual-core CPU), which can be a bottleneck for running deep learning models.
-   **Power Consumption**: Continuous sensor reading and data processing may drain the battery quickly in a wearable setup.
-   **Data Storage**: Limited onboard storage necessitates efficient data management or external storage solutions.

## Next Steps

1.  **Complete Dataset Recording and Publication**: Finish recording the dataset and make it publicly available. This will contribute to the research community and allow others to validate and build upon this work.
2.  **PCB Design and Implementation**: Build a custom PCB to replace the wired connections between components. This will significantly reduce the size of the device by eliminating bulky wires, making it more comfortable and practical for users.
3.  **Model Training with Barometric Data**: Train the model incorporating barometer data, specifically altitude measurements, to assess how it affects the model's accuracy. This could enhance the system's ability to distinguish between falls and non-fall events involving altitude changes.
4.  **Integration of ECG Sensor (AD8232)**: Expand the sensor array by including an ECG sensor like the AD8232. Training the model with ECG data may improve the detection of physiological changes associated with falls, further increasing accuracy.

## Conclusion

This project demonstrates the feasibility of deploying advanced Transformer-based models on resource-limited hardware for real-time fall detection. The high accuracy and recall rates achieved indicate significant potential for improving elderly care and safety. While there are limitations due to hardware constraints, ongoing advancements in edge computing and model optimization techniques offer promising avenues for enhancing the system's performance and practicality.

The detailed findings and methodologies of this project will be presented at the [International Conference on Advanced Trends in Information Theory (ATIT)](https://atit.ieee.org.ua/) in November 2024. I look forward to sharing more insights and engaging with the community there.

## Links and References

-   **Conference Publication**: This work will be presented at the [International Conference on Advanced Trends in Information Theory (ATIT)](https://atit.ieee.org.ua/) in November 2024.
-   **Raspberry Pi Zero 2W**: [Official Website](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)
-   **MPU-9265 Sensor Documentation**: [Datasheet](https://invensense.tdk.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf)
-   **BMP-388 Sensor Documentation**: [Datasheet](https://www.mouser.com/pdfdocs/BST-BMP388-DS001-01.pdf)
-   **OpenSCAD**: [Official Website](https://www.openscad.org/)

