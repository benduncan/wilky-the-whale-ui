This document covers the basic construction, setup and deployment of the remote microphone


# Hardware platform

Design specifications
The Hardware must be powerful enough for basic audio capture and be able to handle communications via internet connectivity.
It must also be fairly efficient in power usage.
The assembled unit must be able to handle the harsh salty water environment and also be serviceable
Audio upload every 10min

# Implementation A
Raspberry pi zero 
https://core-electronics.com.au/raspberry-pi-zero.html?src=raspberrypi
utms/3g/4g modem dongle
https://www.ebay.com.au/itm/3G-4G-LTE-USB-Wireless-Network-Dongle-Mobile-Broadband-Modem-with-SIM-Card-Slot/323737311419?hash=item4b603f58bb 
on a battery (14000mA)
https://www.lenovo.com/au/en/accessories-and-monitors/chargers-and-batteries/power-banks/USB-C-Laptop-Power-Bank-WW/p/40AL140CWW
with a solar panel
USB OTG connector * 2 (one for pi to dongle, one for pi to powerbank)
https://www.ebay.com.au/itm/USB-Female-to-Micro-USB-Male-Cable-Adapter-For-Android-Phone-Tablet-OTG/282633446977?hash=item41ce442641:m:m4_yeFKgQFsIzFefQRAtYAA
Implementation B
Aurduino derivative with 800 mhz link back to mainland for Internet endpoint
https://docs.espressif.com/projects/esp-adf/en/latest/design-guide/board-esp32-lyrat-v4.3.html 
https://www.espressif.com/sites/default/files/documentation/esp32-wrover_datasheet_en.pdf


# Common
Water-tight weatherproof Casing - pvc pipe? 3d printed?
a battery
optionally a solar panel
Microphone https://shop.kithub.cc/collections/environmental-monitoring-kits/products/underwater-microphone-kit-premium?variant=3964985924

# Construction
Pvc tubing with possibly screw-on endcaps
Silicone sealant

# Software
OS
Raspbian stock

# Additional software
Continuous sound sampling
End of sound sequence detection
Modem operation:
Bulk upload
Realtime socket

4g Data
Audio File
Must do 12 hours of audio per day
These 12 hours are split up into 10 minute blocks
https://www.sounddevices.com/audio-record-time-calculations/
Assuming a bitrate of 128kb/s as mp3
10 min will take up 9.2MB
12 hours * 60min = 720min / 10min blocks = 72 blocks of 9.2MB
12 hours = 1 day = 662.4MB/day
Largest month = 31 days * 662.4MB = 20534.4MB/month = 20.53GB/month

# Hardware
Dongle
https://www.ebay.com.au/itm/Unlocked-4G-LTE-3G-USB-Dongle-Wifi-Hot-Spot-Mobile-Broadband-Mifi-Internet-Modem/293023346229?epid=25029976654
Capable of 50mbps upload
Is USB 2.0 and thus has maximum mA draw of 500mA/hr
Raspberry Pi Zero base power consumption while idle = 80mA * 24hrs = 1920mA * 7days = 13440mA/week
USB 14000mAh power bank
https://www.lenovo.com/au/en/accessories-and-monitors/chargers-and-batteries/power-banks/USB-C-Laptop-Power-Bank-WW/p/40AL140CWW

# Provider
Telstra has 4g upload rate of 10.8mbps average
Thus has 1.3MB/s upload
9.2MB / 1.3MB/s = 7.08sec to upload 10min block
7.08sec * 72 blocks = 509.76sec per day to upload 12 hours of audio
509.76sec / 60sec = 8.5min * 7days = 59.5min/week / 60min/hour = 0.99hrs * 500mA/hr = 495mAh + 13440mA = 13935mA battery required for 1 week
Cheapest plan for 20.53GB/month = $60/month

Optus has 4g upload rate of 22mbps average
Thus has 2.75MB/s upload
9.2MB / 2.75MB/s = 3.35sec to upload 10min block
3.35 * 72 blocks = 241.2sec per day to upload 12 hours of audio
241.2sec / 60sec = 4min * 7days = 28min/week / 60min/hour = 0.47hrs * 500mA/hr = 235mA + 13440mA = 13675mA battery required for 1 week
Cheapest plan for 20.53GB/month = $45/month

