 Assumptions in this context are is a certain aspects of the specification or
functions that are taken to be true without proof. This is inevitable as the 
client will never have perfect knowledge of the system requirements. This means
in order to make progress, certain things are assumed true and then later 
verified throughout the project. Assumptions we are making throuhgout the 
project are:

- All text on the page will be written in english

- For each new message that is sent, the ids will start from 1 and increment by 1
for each new message sent

- Assume that react_id's are predefined constants, which increase starting from 0.
For example, REACT_0, REACT_1, ect.

- Assume the largest valid react_id is 4. i.e REACT_4. Making there 5 reactions
avaliable to users.

- Assume that in the message send later function, you cant send it at the current 
time, as this is the exact same as message_send, making it wasteful.

- We have the server space required to store password data for all users

- You can have an unlimited number of login attempts, regardless of if you then
login fails

- The layout of the interface will be similar to that of its predeccesor, slackr

- This system will work across a range of machines, including mobile devices and 
personal computers

- Searching for messages will only begin search after pressing enter, or 
something similar to indicate that you are done with input

- Each function test must go in a seperate file in order to extensively test
each function independantly

- When setting user first and last names, a max character limit will be in place
so it still looks aesthetic when displayed to the user

- Only admins are able to give others roles, not members or owners (owners are 
often admin though)

- When testing functions, each function will be independant of the others

- When choosing to send a message in advance, the user will be able to specify 
the exact date and time they wish the message to be sent and it will be sent to the server using pythons time function.

- The "summary" for standups will simply be a log of all messages sent during the given time period
