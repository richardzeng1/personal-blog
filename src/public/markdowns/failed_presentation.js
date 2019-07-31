const p = `
## The Layout


Let me set the scene, I've been at a ~300 people start up for about a month. Myself and another
coworker have been working on the infrastructure needed for a new database migration versioning system.
Essentially, its like Git for database migrations, it tracks migrations that have been applied so the state
of the database is always known and reproducable. This new system affects all of the engineering department
so I guess you would say its pretty significant.


My coworker and I had the pipelines setup to run migrations on DEV, QA and PROD environments but only consistently
worked on the QA and PROD environments. You see, the DEV database was in a constant state of fucked up. There was
one shared for all of engineering and the constant migrations caused the pipeline to fail. There was a unsexy solution:
delete all the existing sql migrations except for the migrations we want to apply. Obviously this isn't a soluion
but it was adequet for the demo.


## Demo
On the day of the demo, the demo migration was still not in a working state, the migrations would fail. That didn't
set us up for success. We pressed on regardless and the presentation started. The easy part of the presentation came
first. We went over the benefits and draw backs of using this system and how it will affect everyone. Little did I know,
I did not hold the microphone close enough to my mouth. Although most of the room could hear me, the individuals dialing in
could not. Then came the demo. Obviously it failed. What did you expect? That was the start of the down fall. My coworker decided to
debug on the spot for 10 minutes in silence. I guess it should have been my job to talk while he solved the issue but that didn't
occur to me at the time. Retrospect is always 20/20. Both of us had major tunnel vision and we couldn't get out of it.
Needless to say, we lost everyone's attention and a few people left. The saving grace was the lively QA session that turned into a
discussion. It's good to know people paid attention, even if they stopped during the demo.


## Take Aways
Its too easy to blame the bad presentation on a bad demo and tunnel vision. Yes I should have started talking or taking questions
and should have had a contingency plan if the demo goes wrong. There are a lot more subtle things which caused use to fail.


1. We didn't have all the pipeline developed. We had the most basic implementation of the system and it could have been used in
PROD but if something does wrong, we needed to run CLI commands. This lead us to develop a pipeline to runs the repairs and
would have resolved our demo on the spot.

2. We never tried speaking in the room with a microphone before hand. I was holding it at my stomach and I'm sure they heard my
stomach growl more than me. Since then, I hold the microphone right next to my chin, close enough to pick up what I'm saying but
far enough to stop the sound of my breathing.

3. One small physical presentation skill I lacked was making eye contact with the audience. I fixated on one person and stared at them
the entire presentation. Following my presentation, my manager gave me some tips and one of them was to slowly scan the corners of the room.
This gives audience members the impression that you are giving them equal eye contact which helps keep them engaged.


## Failed?
You never really fail in tech, you just figured out another way not to do something. It was a really good learning experience and
it was at a company where people are not afraid to try and you are not judged if you fail. Its the fear of failure which criple some people
and prevent them from ever speaking in front of a large crowd. I can personally tell you, it sucks in the moment (and the following moments)
but its the fastest way to grow as a presenter and you can only get better. With that said, I hope you're presentation goes horribly!
`

export default p
