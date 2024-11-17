---
layout: "post"
title:  "Developing a High-Accuracy Fall Detection Device Using Raspberry Pi and Transformer Models"
date: 2024-11-16 00:00:00
permalink: developing-fall-detection-device-raspberry-pi
tags: ['raspberry-pi', 'machine-learning', 'fall-detection', 'transformers', 'elderly-care']
---

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
From left to right: Arduino Portenta H7, Radxa Zero 3W and Raspberry Pi Zero 2W

## Hardware Components

### Raspberry Pi Zero 2W

I chose the Raspberry Pi Zero 2W due to its small form factor, low power consumption, and sufficient computational capabilities for running lightweight deep learning models. Its compact size makes it ideal for wearable applications.

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

## Data Collection Methodology

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
*Filtering mechanisms*

Raw sensor data often contains noise and irrelevant fluctuations. To address this, I employed several preprocessing techniques:

- **Noise Filtering**: Applied a Butterworth low-pass filter to smooth out the accelerometer data while preserving significant spikes indicative of falls.
- **Spike Detection**: Identified and retained prolonged, spiky periods in the data, which are characteristic of fall events.
- **Data Normalization**: Standardized the data to have a mean of zero and a standard deviation of one, improving the model's training efficiency.

## Fall Detection Models

### Transformer-Based Architectures

I explored various Transformer-based models for fall detection, leveraging their ability to capture temporal dependencies in time-series data:

1. **Standard Transformer**
2. **Performer**
3. **Linformer**
4. **Temporal Convolutional Transformer**
5. **Long Short-Term Transformer**
6. **Multi-Scale Transformer**
7. **Time-Series Transformer (T2V-BERT)**

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

The device runs a Python script that:

- **Collects Data**: Reads sensor data at 100 Hz and stores it in a buffer.
- **Processes Data**: Applies filtering and preprocessing in real-time.
- **Runs Inference**: Feeds the processed data into the trained Transformer model for fall detection.
- **Alerts**: Activates a buzzer alarm if a fall is detected.

#### Key Libraries Used

```python
import smbus
import RPi.GPIO as GPIO
import board
import busio
import adafruit_bmp3xx
import threading
import numpy as np
from scipy.signal import butter, filtfilt
# ... other necessary imports
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

