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
      //Red   
      case 'W':
        digitalWrite(10, HIGH);
        break;
      case 'w':
        digitalWrite(10, LOW);
        break;
      //Yellow        
     case 'U':
        digitalWrite(9, HIGH);
        break;
      case 'u':
        digitalWrite(9, LOW);
        break;
      //Green         
      case 'V':
        digitalWrite(8, HIGH);
        break;
      case 'v':
        digitalWrite(8, LOW);
        break;
    }
  }
}
```
En el bloque inicial de codigo se declara algunos pines, como output, esto corresponde a los 3 leds que se van a controlar.

Luego se en el loop de ejecucion, constantemente se lee si entra un comando por bluetooth. Luego con esa variable se trabaja en la ejecucion de codigo, en este caso simplemente se prenden o apagan los leds.