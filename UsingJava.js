const java = require('java');

java.classpath.push('path/to/your/java-package.jar');

const YourJavaClass = java.import('com.example.YourJavaClass');
const instance = new YourJavaClass();
instance.yourMethod();
