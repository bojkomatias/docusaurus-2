---
id: intro
title: Protocolo bluetooth
sidebar_label: Protocolo bluetooth
---

## ¿Qué es bluetooth?

Bluetooth es una tecnología de red que conecta de forma inalámbrica dispositivos que se encuentran en un área corta de distancia, como máximo 10 metros y trabaja en el rango de banda de 2400MHz a 2480MHz. En una red bluetooth puede conectarse como máximo 7 dispositivos activos y puede haber otros 255 dispositivos estacionados. Los dispositivos que pueden ser conectados varían desde los celulares, teclados, laptops, computadoras, impresoras, parlantes, entre otros.

Bluetooth es muy utilizado porque requiere menor energía para transmitir datos, también tiene una mejor relación costo efectividad, por tal motivo son ideales en el mundo del IoT para proyectos que necesitan trabajar con baja potencia. Otra razón por la que se utiliza mucho este protocolo es porque en una comunicación de corta distancia la transmisión es muy rápida, puede alcanzar los 2 Mbps fácilmente.

Las redes re bluetooth se pueden clasificar en dos, la red mas simple es la Piconet, la cual está compuesta por un nodo maestro y hasta siete nodos esclavos conectados activos. Luego esta la red mas compleja es el Scatternet que consiste en dos o más Piconets conectadas mediante un nodo puente en común, esto permite aumentar el área de alcance de la red ya que permite un mayor número de dispositivos conectados.


## Comunicación de dos dispositivos bluetooth

La comunicación entre dos dispositivos bluetooth es un proceso de varios pasos que se producen en tres etapas (consulta, paginación, conexión).
-	La consulta se realiza cuando dos dispositivos que se van a conectar no tienen conocimiento de los detalles de cada uno. Entonces el otro dispositivo si quiere establecer la comunicación le manda el un mensaje de respuesta con su nombre y la dirección.
-	La paginación es el proceso en le que los dos dispositivos se conectan entre sí, esto solo se puede hacer si cada dispositivo conoce la dirección del otro dispositivo, que fue solicitada en la etapa de consulta.
-	Cuando la paginación termina, los dispositivos entran en modo de conexión. Cuando ya se encuentran conectados los dispositivos tienen la habilidad de comunicarse entre ellos.
