### Prerequisites

GreenNav consists of a Java server with an HTML+JavaScript frontend. It is divided into multiple Maven modules, where Maven is a build management tool helping with dependencies, building the project and a lot more. If you want to use and contribute to GreenNav, you will need to following (we usually assume the latest versions):

* Git
* Maven 3
* Java (7+)
* An IDE of your choice (e.g. Eclipse Juno+)

### Installing

If you clone the repository you will find a Maven project containing the parent `pom.xml`, some text files (e.g. the readme and the license note) and folders for the Maven modules.

In order to get the project files, you need to run:
* `git clone https://github.com/Greennav/greennav.git`

Go into the project directory and enter `mvn install`. This will compile the project, run the test cases, and install the result to your local repository (i.e. it is available on your system). Sometimes test cases may take quite a while, so if you want to skip tests, you write `mvn install -DskipTests` instead.

### Configuring

The frontend is started with the default configuration, which connects to localhost. It is important to tell the frontend which server to connect to. You can configure this in the `pom.xml` of the parent project, where you can find a parameter called `webservice.url`. There you can enter whatever URL the frontend is supposed to connect to. The default is `http://localhost:8111`.

### Using

In order to run the routing server we suggest to simply use the Jetty plugin. You would just enter `mvn jetty:run -pl Server`. You can launch the frontend the same way as the server, namely by typing `mvn jetty:run -pl GoogleFrontend`.

There are currently two server variants: This is important to recognize, because besides the routing server found at the public repository, there is another variant hosted at the University of Lübeck, which is under active research. Nevertheless, you can still choose to connect the frontend to the public web interface of this variant. This can be done by configuring the `webservice.url` to `https://greennav.isp.uni-luebeck.de/greennav`.

### Some notes about the Android app

The app uses a WebView and a Javascript bridge with JavascriptInterfaces. For that, we need Android 17+ (maybe earlier version do work, but they do not have the annotations, making things insecure). Be careful however, from where you install the android sdk into your local repositories! To make it work, I needed to install the android sdk, installed it to /opt/android/sdk and installed /opt/android/sdk/platforms/android-23/android.jar to my local maven repository, using the following command:

mvn install:install-file -Dfile=android.jar -DgroupId=com.google.android -DartifactId=android -Dversion=23 -Dpackaging=jar
