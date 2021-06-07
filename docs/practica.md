---
id: practica
title: Desarrollo práctico
sidebar_label: Desarrollo práctico
---

## Explicación del desarrollo

Se realizo un ejemplo de control de luces vía bluetooth, se utilizó una placa Arduino UNO para el procesamiento de la información, un modulo HC-06 para la comunicación bluetooth del dispositivo, tres LEDs y tres resistencias de 330Ohm.

Con este ejemplo practico se puede demostrar cómo funciona una conexión bluetooth interactuando en este ejemplo un celular y una placa Arduino.

## Diagrama del ejemplo práctico 

![alt text](/img/TP_Final%20Diagrama_bb.png "Diagrama Bluetooth")

## Code

```arduino
char command;

#define Bluetooth Serial

void setup()
{
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);
  
  Serial.begin(9600);
  Bluetooth.begin(9600);
}

void loop(){

  if(Bluetooth.available()){
    command = Bluetooth.read();

    Serial.println(command);  
    switch (command) {
      case 'W':
        digitalWrite(10, HIGH);
        //red(command);
        break;
      case 'w':
        digitalWrite(10, LOW);
        //red(command);
        break;
     case 'U':
        digitalWrite(9, HIGH);
        //yellow(command);
        break;
      case 'u':
        digitalWrite(9, LOW);
        //yellow(command);
        break;
      case 'V':
        digitalWrite(8, HIGH);
        //green(command);
        break;
      case 'v':
        digitalWrite(8, LOW);
        //green(command);
        break;
    }
  }
}
```
