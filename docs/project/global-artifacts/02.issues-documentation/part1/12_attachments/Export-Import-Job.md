## Export jenkins configuration

For this you will need the jenkins-cli jar file.

Head to the jenkins management tab.

[Jenkins Management Button](jenkins-management.png)

Scroll down to 'Tools and Actions'

[Jenkins CLI option](tools-and-actions.png)

To actually export the configuration, use the following command:

java -jar jenkins-cli.jar -s http://localhost:8080/ get-job JOB
(where JOB is your job name, in this case, probably ddd-forum) you can produce a file with your configuration, by adding '> exported-file.xml'.
• Or append “/config.xml” to your job URL
• Or you can look for the same configuration file in your Jenkins application folder (certainly more work here).

In case, authentication is required, the process is similar, however, the username and password must also be an input:

java -jar jenkins-cli.jar -s <your server url> -auth username:password get-job <JOB NAME> > <JOB_NAME.xml>

## Import jenkins configuration

To import the job configuration file:

java -jar jenkins-cli.jar -s <your server url> get-job <JOB NAME> > <JOB_NAME.xml>

Or in case authentication is required,

java -jar jenkins-cli.jar -s <your server url> -auth username:password get-job <JOB NAME> > <JOB_NAME.xml>

Currently, our exported job configuration is located here:
[Jenkins job ddd-forum configuration](../../../../../../jenkins-configuration/ddd-forum-job.xml)

In case someone needs to update it, please overwrite the current one, and warn the team.