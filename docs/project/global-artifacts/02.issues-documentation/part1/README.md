


<p align="center">
 <img src="https://user-images.githubusercontent.com/6892666/67032637-fc237200-f0e1-11e9-8a46-f5d655e71962.png"/>
</p>
<h1 align="center">DDDForum.com</h1>


## About 

In this document we will document how the issues given to our team in the part 1 of our project were solved. 

## Documentation

### 1 - Build Automation using Node.js scripts

In this issue, we wanted to automate the installation of the necessary modules to run our application using the "npm install" command and build the same application using the "npm run-script" command.

To achieve the desired result, a Node.js script was created with the name "installDependenciesAndBuild.js." This script contains a function called "runCommand," which takes the command and its success message as parameters. In case of an error, this script also displays the errors.


![RunCommand](runCommand.png)

We can see that the function is called with the previously mentioned commands.

![runCommandApplied](runCommandApplied.png)

After completing the production of this script, the automation of it is not yet finalized. To accomplish this, we created a new script in the "package.json" file that runs the created Node.js script, and we created a task using Gradle to execute it. 

![jsonScriptNode](jsonScriptNode.png)

This task, named "installDependenciesAndBuild" (type: Exec), will be used in Gradle to automate the entire process in the pipeline.

![installDependenciesAndBuildTask](installDependenciesAndBuildTask.png)

We created the String variable "npm" as follows: "npm = os.isLinux() ? 'npm' : 'npm.cmd'". This is because we noticed that the "npm" command in a Gradle task on Windows only works when accompanied by ".cmd."

![npmGradle](npmGradle.png)

After applying all the referenced changes to our master branch, we go to Jenkins and configure our new task within the job steps.

![configInstallDependenciesAndBuildTaskJenkins](configInstallDependenciesAndBuildTaskJenkins.png)

As we can see, the build was successful!

![installDependenciesAndBuildTaskJenkinsSuccess](installDependenciesAndBuildTaskJenkinsSuccess.png)