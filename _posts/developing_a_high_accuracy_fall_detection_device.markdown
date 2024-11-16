---
layout: "post"
title:  "Developing a High-Accuracy Fall Detection Device Using Raspberry Pi and Transformer Models"
date: 2024-11-16 00:00:00
permalink: developing-fall-detection-device-raspberry-pi
tags: ['raspberry-pi', 'machine-learning', 'fall-detection', 'transformers', 'elderly-care']
---

Falls are a significant concern for the elderly population, often leading to serious injuries and a decrease in the quality of life. Detecting falls promptly can enable quick assistance, potentially reducing the severity of injuries and providing peace of mind for both seniors and their families. In my recent project, I set out to create a highly accurate, real-time fall detection device that minimizes false positives while operating on a resource-constrained platform.

## Project Overview

The primary goal of this project was to develop a compact and efficient fall detection system using a Raspberry Pi Zero 2W, equipped with MPU-9265 (accelerometer and gyroscope) and BMP-388 (barometric pressure) sensors. The device is designed to collect data on falls and Activities of Daily Living (ADL), process the data using Transformer-based deep learning models, and detect falls with high accuracy.

## Hardware Components

### Raspberry Pi Zero 2W

I chose the Raspberry Pi Zero 2W due to its small form factor, low power consumption, and sufficient computational capabilities for running lightweight deep learning models. Its compact size makes it ideal for wearable applications.

### MPU-9265 Sensor

The MPU-9265 sensor provides 3-axis accelerometer and gyroscope data. It offers comprehensive motion sensing, which is crucial for accurately detecting falls by analyzing sudden changes in acceleration and orientation.

### BMP-388 Sensor

The BMP-388 is a high-precision barometric pressure sensor that measures altitude changes. Detecting rapid altitude changes can help distinguish between falls and other types of movements.

## 3D-Printed Case Design

![OpenSCAD Design](path_to_openscad_image)

Using OpenSCAD, I designed a custom case to house all the components securely. The key design considerations included:

- **Compactness**: Ensuring the case is small and lightweight for comfortable wear.
- **Accessibility**: Including openings for the USB Type-C port and two buttons for user interaction.
- **Durability**: Designing the case to protect the components from physical damage.

The final design was printed using a 3D printer, resulting in a functional and aesthetically pleasing case.

## Data Collection Methodology

To train the fall detection models, I needed a comprehensive dataset of both fall events and ADLs. I partnered with the regional hand-to-hand combat federation to collect realistic fall data. The data collection process involved:

- **Recording Sessions**: Each session lasted 8 seconds, capturing the sensor data before, during, and after the fall.
- **Signalization**: The device emitted signals to indicate the start of recording, the moment a fall was expected, and the end of recording.
- **Participant Actions**: Participants performed various types of falls and normal daily activities to provide a diverse dataset.

## Data Preprocessing

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

## Comparison with Existing Solutio
