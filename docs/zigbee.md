---
id: zigbee
title: ZigBee
sidebar_label: ZigBee
---

## ¿Qué es?
  Zigbee es el nombre de la especificación de un conjunto de protocolos de alto nivel de comunicación inalámbrica para su utilización con radiodifusión digital de bajo consumo, basada en el estándar IEEE 802.15.4 de redes inalámbricas de área personal (wireless personal area network, WPAN). Su objetivo son las aplicaciones que requieren comunicaciones seguras con baja tasa de envío de datos y maximización de la vida útil de sus baterías.

## Comparando ZigBee
  Zigbee se basa en el nivel físico y el control de acceso al medio (MAC).
  El desarrollo de la tecnología se centra en la sencillez y el bajo costo más que otras redes inalámbricas semejantes de la familia WPAN, como por ejemplo Bluetooth. El nodo Zigbee más completo requiere en teoría cerca del 10% del hardware de un nodo Bluetooth o Wi-Fi típico; esta cifra baja al 2% para los nodos más sencillos.

  Zigbee es muy similar al Bluetooth pero con algunas diferencias y ventajas para domótica
  
  - Una red Zigbee puede constar de un máximo de 65535 nodos distribuidos en subredes de 255 nodos, frente a los ocho máximos de una subred (Piconet) Bluetooth.
  - Menor consumo eléctrico que el de Bluetooth. Se debe a que el sistema Zigbee se queda la mayor parte del tiempo dormido.
  - Tiene una velocidad de hasta 250 kbit/s, mientras que en Bluetooth es de hasta 3000 kbit/s. Por eso ZigBee se orienta mas a la Domotica donde los productos dependientes de la batería y los sensores implican una transferencia de datos menor.


## Tipo de dispositivos
### Coordinador Zigbee (Zigbee Coordinator, ZC).
   El tipo de dispositivo más completo. Debe existir solo uno por red. Sus funciones son las de encargarse de controlar la red y los caminos que deben seguir los dispositivos para conectarse entre ellos.

### Router Zigbee (Zigbee Router, ZR).
  Interconecta dispositivos separados en la topología de la red, además de ofrecer un nivel de aplicación para la ejecución de código de usuario.

### Dispositivo final (Zigbee End Device, ZED).
  Posee la funcionalidad necesaria para comunicarse con su nodo padre (el coordinador o un enrutador), pero no puede transmitir información destinada a otros dispositivos. De esta forma, este tipo de nodo puede estar dormido la mayor parte del tiempo, aumentando la vida media de sus baterías. Un ZED tiene requerimientos mínimos de memoria y es por tanto significativamente más barato.

## Funcionalidad
### Dispositivo de funcionalidad completa (FFD).
  También conocidos como nodo activo. Es capaz de recibir mensajes en formato 802.15.4. Gracias a la memoria adicional y a la capacidad de computar, puede funcionar como Coordinador o Enrutador Zigbee, o puede ser usado en dispositivos de red que actúen de interfaz con los usuarios.

### Dispositivo de funcionalidad reducida (RFD). 
  También conocido como nodo pasivo. Tiene capacidad y funcionalidad limitadas (especificada en el estándar) con el objetivo de conseguir un bajo coste y una gran simplicidad. Básicamente, son los sensores/actuadores de la red.

## Topologias
### Topologia en Estrella.
  Donde existe un coordinador y se situa en el centro. Es simple de implementar, pero al pasar todo por el coordinador puede ser un cuello de botella

  ![Star Topology](/static/img/star-topology.jpg)

### Topologia en Árbol.
  Esta tambien cuenta con un coordinador central, pero conectado a routers encarcargados de comunicarse con los nodos finales. Esto extiende el alcance de la red. La regla es que solo los coordinadores o routers puede ser padres, y solo los nodos finales pueden ser hijos. Pero de esta manera si un router pierde la conexion, tambien lo hacen todos los hijos conectados.

  ![Tree Topology](/static/img/tree-topology.jpg)

### Topologia en Cluster.
  Cluster es una forma especifica de la topologia en Arbol.

  ![Cluster Topology](/static/img/cluster-topology.jpg)


### Topologia en Malla.
  Consiste en el coordinador, comunicado con multiples routers, y conexion entre routers tambien. El punto clave es que elimina las complicaciones si un nodo se cae, la conexion puede cambiar de ruta y seguir trabajando normalmente. Es mas compleja de implementar, pero mass confiable.

  ![Mesh Topology](/static/img/mesh-topology.jpg)