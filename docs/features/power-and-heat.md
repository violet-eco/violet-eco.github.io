# Power and Heat Management

Violet focuses power economy, battery optimization and heat control to ensure top
performance and extend the life of Violetians' device. Our system employs a variety of
approaches and strategies to optimise power utilization, increase battery life, and
minimize excessive heat buildup. This document gives a summary of how Violet solves these
critical issues.

- [Power and Heat Management](#power-and-heat-management)
- [Power Efficiency](#power-efficiency)
  - [Dynamic Frequency Scaling](#dynamic-frequency-scaling)
  - [Adaptive Brightness Control](#adaptive-brightness-control)
  - [Device Sleep and Wake](#device-sleep-and-wake)
    - [Device Sleep](#device-sleep)
    - [Device Wake](#device-wake)
  - [Peripheral Power Management](#peripheral-power-management)
    - [Power State](#power-state)
  - [Battery Saver Mode](#battery-saver-mode)
- [Heat Management](#heat-management)
  - [Termal Throttling](#termal-throttling)
    - [Temperature Thresholds](#temperature-thresholds)
    - [Clock Speed Reduction](#clock-speed-reduction)
    - [Performance Impact](#performance-impact)
    - [Dynamic Adjustment](#dynamic-adjustment)
  - [Active Cooling Systems](#active-cooling-systems)
    - [Fan Cooling](#fan-cooling)
    - [Performance-Driven Fan Control](#performance-driven-fan-control)
    - [Intelligent Fan Profiles](#intelligent-fan-profiles)

# Power Efficiency

We are committed to making the operating system as energy-efficient as possible. This is accomplished using intelligent power management algorithms that optimize power use while retaining peak performance. Here are some highlights:

- **Dynamic Frequency Scaling:** Based on workload and resource needs, Violet dynamically adjusts the CPU clock speed. By scaling the CPU frequency, this assures efficient power use.

## Dynamic Frequency Scaling

Dynamic Frequency Scaling (DFS) is a technique used in Violet to dynamically adjust the CPU clock speed based on the workload and resource requirements. The goal of DFS is to optimize power consumptiong by scaling the CPU frequency.

- **Workload Monitoring:** Violet constantly monitors the CPU utilization, which represents the amount of processing power being utilized by running processes.
- **Frequency Scaling Policies:** Violet makes use of frequency scaling regulations, which specify the connection between CPU use and clock speed. These regulations govern how the CPU frequency is modified in response to the workload. Depending on the desired balance of power efficiency and performance, several policies can be adopted.
- **Scaling Decision:** Violet decides whether to raise or decrease the CPU clock speed based on the workload and the preset frequency scaling parameters. If the CPU is underutilized and the workload is light, the system may reduce the clock speed to save power. In contrast, if the CPU usage is high and intensive activities are being performed, the system may boost the clock speed to ensure optimal performance.
- **Clock Speed Adjustment:** Violet adjusts the CPU clock speed after the scaling choice has been determined. This is accomplished by adjusting the CPU's voltage and frequency settings. Lowering the clock frequency decreases the number of clock cycles per second, which results in decreased power usage. Increasing the clock speed gives more processing capacity for resource-intensive applications, but it may also use more power.

## Adaptive Brightness Control

Violet has an adaptive brightness control function that automatically changes the brightness level of the display according on the ambient lighting conditions.

- **Light Sensor Detection:** The existence of light sensors in the gadget is detected by Violet. These sensors, which are normally situated on the device's front or back, monitor the intensity of ambient light.
- **Ambient Light Measurement:** The ambient light levels surrounding the gadget are continually monitored by the light sensors. They provide real-time information about the brightness of the surroundings.
- **Brightness Adjustement:** Violet dynamically changes the display brightness according on the observed ambient light levels to offer the best viewing experience. To better visibility in light conditions, the screen brightness is raised. The brightness is reduced in darker conditions to alleviate eye strain and preserve battery.

## Device Sleep and Wake

Device Sleep and Wake are power management features in Violet that control the device's sleep and wake states.

### Device Sleep

Device Sleep is a power-saving mode in which the device enters a low-power mode to conserve energy while not actively in use.

1. **Idle Detection:** Violet identifies times of user idleness by monitoring user input, such as keyboard and mouse interactions, touchscreen interactions, or a lack of input for a specific period of time.
2. **Sleep Trigger:** When the device is declared idle based on the idle detection criteria, Violet causes the device to enter the Sleep state.
3. **Power Reduction:** When in the Sleep mode, Violet lowers power usage by shutting off or reducing power to non-essential hardware components. This includes minimizing CPU and GPU activity, lowering display brightness, and halting background operations.
4. **Power State Monitoring:** While in Sleep mode, Violet continuously monitors various triggers, such as user input or scheduled wake events, to determine when the device should exit the Sleep state.

### Device Wake

Device Wake is the process of transitioning the device from the Sleep state back to an
active state. When certain events occur, Violet wakes up the device to make it ready for
immediate use.

Device Wake refers to the process of returning a device from the Sleep state to an active state. Violet wakes up the gadget when certain situations occur, preparing it for instant usage.

1. **Wake Triggers:** Violet watches for particular triggers that may force the gadget to wake up from its sleep state. User interaction, planned wake events, network activity, or external device connections are examples of triggers.
2. **Power Restoration:** When a wake trigger is identified, Violet provides power to the required hardware components, such as the CPU, GPU, display, and input devices, to bring the device back to life.
3. **Resume Operations:** Violet restarts all suspended or halted processes, programs, or tasks that were running before the device went to sleep.

## Peripheral Power Management

Violet has a feature called *Peripheral Power Management*, which enables for the effective
management of power consumption by peripheral devices attached to the system. Violet
optimizes power utilization, increases battery life and improves overall system economy
by intelligently managing the power states of peripherals.

### Power State

Violet uses several power states to manage peripheral power consumption based on use and
system needs. The following are the primary power states in Peripheral Power Management:

1. **Active State:** Peripherals are completely powered up and ready to use when they are in the active state. To give complete functioning, they work at their greatest capacity.
2. **Idle State:** Violet may convert a peripheral device to an idle state when it is inactive and not actively utilized. The peripheral consumes less power while remaining functioning in this configuration. When idle, a display, for example, may reduce its brightness or enter a power-saving mode.
3. **Standby State:** The standby state provides a higher level of power savings. The peripheral consumes minimum power and enters a low-power mode in this condition, while still retaining important functionalities to swiftly restart operation as needed. A printer, for example, may enter a standby mode to conserve electricity while remaining ready to print when a task is received.
4. **Power-Off State:** The power-off condition turns off all power to the peripheral device. The peripheral is not functioning in this state and turning it back on needs specific activation or human engagement.

Violet provides power to peripherals dynamically according on their consumption demands.
It intelligently optimizes power distribution to prioritize power-hungry peripherals as
necessary while reducing power to less vital or idle devices.

Peripheral devices are only powered when needed. USB devices, for example, are turned on when they are connected or when the system detects data transfer activity. This ensures that power is distributed to peripherals effectively, eliminating excessive power use.

## Battery Saver Mode

Violet's Battery Saver Mode is intended to improve portable device battery life by
optimizing system settings and reducing power consumption. When enabled, this function
dynamically adjusts multiple system components to decrease energy usage while ensuring a
seamless user experience.

Battery Saver Mode optimizes system settings and lowers power usage to extend the life of
portable devices' batteries. This is accomplished by modifying the CPU clock speed,
minimizing background processes, and improving resource allocation. The system consumes
less power when operating at a reduced performance level, resulting in longer battery
life.

Battery Saver Mode decreases screen brightness and shortens screen timeout duration to
save even more power. When the gadget is not actively in use, this helps to minimize
power usage.

Background program operations are also restricted or halted to save CPU utilization and
data transfer. Non-essential operations are halted or limited to critical functions to
conserve energy.

Violet may additionally optimize network connections to save data use and limit
network-intensive functions.

While Battery Saver Mode is designed to extend battery life, it may have a little impact
on overall user experience. Due to lower performance and limited background operations,
users may notice a drop in system responsiveness and app performance. Violet, on the
other hand, aims to achieve a balance between power savings and user experience, ensuring
that key functionality is preserved while battery life is conserved.

# Heat Management

Heat management is an important factor in device performance and lifetime. Overheating
can result in decreased performance, faster component wear and tear and potentially
system instability. Violet employs a variety of heat management mechanisms to maintain
ideal device temperature and prevent overheating.

## Termal Throttling

Thermal throttling is a crucial heat management technique employed by Violet to prevent
device overheating. It involves dynamically adjusting the performance of the CPU and GPU
based on temperature levels to maintain a safe operating temperature.

### Temperature Thresholds

Violet continuously monitors the temperature of the CPU and GPU through embedded
temperature sensors. These sensors provide real-time temperature readings that are
compared against predefined temperature thresholds. When the temperature exceeds a
certain threshold, thermal throttling is triggered.

### Clock Speed Reduction

When thermal throttling is activated, Violet reduces the clock speed of the CPU and GPU.
The clock speed refers to the rate at which these components process instructions and
perform calculations. By lowering the clock speed, the CPU and GPU generate less heat,
helping to mitigate temperature rise.

### Performance Impact

Thermal throttling does come with a performance impact. When the clock speed is reduced,
the CPU and GPU's processing capabilities are limited, resulting in slower performance.
However, this trade-off is necessary to prevent overheating and protect the device from
potential damage.

### Dynamic Adjustment

The extent of thermal throttling varies based on the severity of the temperature
increase. Violet employs dynamic adjustment mechanisms to ensure that the degree of
throttling matches the temperature rise. In less critical scenarios, where the
temperature is only slightly above the threshold, the clock speed reduction may be
minimal. Conversely, in more severe cases, where the temperature is significantly higher,
the clock speed reduction may be more substantial.

## Active Cooling Systems

Active cooling systems are an integral part of Violet's heat management strategy. These
systems utilize mechanisms to actively remove excess heat from the device, thereby
helping to maintain optimal operating temperatures. By employing active cooling methods,
Violet enhances performance, prolongs device lifespan, and ensures user comfort.

### Fan Cooling

One of the primary methods employed in active cooling is fan cooling. Violet utilizes
fans strategically placed within the device to facilitate the movement of air and
dissipate heat. When the system detects elevated temperatures, the fans spin at higher
speeds to increase airflow and carry heat away from critical components.

### Performance-Driven Fan Control

To optimize cooling efficiency, Violet implements performance-driven fan control
algorithms. These algorithms take into account various factors, such as CPU and GPU
utilization, ambient temperature, and workload intensity, to determine the appropriate
fan speed. During resource-intensive tasks, the fans operate at higher speeds to provide
maximum cooling capacity, ensuring optimal performance and temperature management.

### Intelligent Fan Profiles

Violet incorporates intelligent fan profiles that dynamically adjust fan speed based on
system requirements. These profiles are designed to balance cooling performance, noise
levels, and power consumption. During low-intensity tasks or when the device is in a
standby state, the fans operate at lower speeds, resulting in quieter operation and
reduced power consumption. Conversely, during demanding workloads or high-temperature
scenarios, the fans ramp up their speed to deliver effective cooling.
