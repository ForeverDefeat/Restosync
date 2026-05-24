#!/bin/bash
cd "c:\Users\User\Desktop\MVP-RestoSync\Backend\comandas"
rm -rf target
mvn clean compile -DskipTests
mvn spring-boot:run
