# Stage 1: Build the application
FROM maven:3.8.4-openjdk-17 AS build

WORKDIR /app

# Copy the pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code and package the application
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Run the application
FROM openjdk:17-jdk

WORKDIR /app
RUN mkdir -p /app/application-properties \
    && mkdir -p /app/logs

# Copy the built jar file from the build stage
COPY --from=build /app/target/wedding-0.0.1-SNAPSHOT.jar wedding-0.0.1-SNAPSHOT.jar
COPY src/main/resources/application.properties /app/application-properties/application.properties

EXPOSE 8080

CMD ["java", "-Djava.net.preferIPv4Stack=true", "-Dspring.profiles.active=prod", "-Dspring.config.location=application-properties/", "-jar", "wedding-0.0.1-SNAPSHOT.jar"]
