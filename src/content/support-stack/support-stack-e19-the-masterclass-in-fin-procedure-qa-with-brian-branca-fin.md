---
title: "Support Stack E19: The Masterclass in Fin Procedure QA with Brian Branca (Fin)"
publishDate: "2026-09-23T07:31:01.700Z"
episode: 19
format: guest
guest: "Brian Branca"
youtubeId: "s6qrgTne1Vc"
thumbnail: "https://images.squarespace-cdn.com/content/v1/660d2c98e2a6e9221e25e9c3/1789997634789-QD0DWHKECDUAD0HUTYEB/Support+Stack+YouTube+Thumbnail+E19.png"
excerpt: "Brian Branca, an AI Conversation Designer at Fin, walks through his weekly Fin QA routine — the Monitor filters that surface the right conversations, and what happens to everything he finds"
resources:
  - {"label":"Using Monitors to find and fix Fin answer issues","url":"https://www.intercom.com/help/en/articles/16295106-using-monitors-to-find-and-fix-fin-answer-issues"}
  - {"label":"Support Stack Ep. 18 — how, when and why to use Procedures","url":"https://youtu.be/nL514WW5Okk"}
squarespaceUrl: "https://www.customersuccess.cx/support-stack/support-stack-e19-the-masterclass-in-fin-procedure-qa-with-brian-branca-fin"
---

Building a Fin Procedure is the well-documented bit. What happens to it afterwards isn’t. Brian Branca, an AI Conversation Designer at Fin, is back for the second episode of a three-part series, and this one picks up where the last left off: the Procedure is live, real customers are hitting it, and you need a way of knowing whether it’s doing its job.

Brian works through both halves of that. First, reviewing a Procedure in the abstract — handing it to Operator and treating it like a teammate rather than a one-shot prompt, then reading back what it flags as critical, structural, trigger quality or polish, and approving the changes as a red-and-green diff. Then the part that really matters: the conversations. He builds a Monitor from the low answer quality template, adds a scorecard, and narrows it with the filter a lot of people don’t know exists — the specific Procedure that triggered. A scheduled sample of 25 conversations a week, reviewed by hand every Wednesday afternoon, with anything recurring aggregated into a tracker ticket rather than fixed on the spot.

The throughline is that none of this replaces you. Monitors decide which conversations are worth your attention; you still decide what’s actually wrong and who needs to fix it. If you own Fin Procedures, run conversation reviews, or you’re an Intercom admin who set something live and quietly stopped looking at it, this is a practical look at keeping a live Procedure honest.

## Episode transcript

**Conor Pendergrast (00:00)**
Hello and welcome to episode nineteen of Support Stack. So, Brian Branca from Fin, AI Conversation Designer — extraordinaire, we might even say. How are you doing today?

**Brian (00:18)**
I’m doing great. I’ve never been called extraordinaire, but I’ll take it.

**Conor Pendergrast (00:22)**
Well, you behave and act like it, so it’s good. Your efforts as someone who uses Fin frequently, your efforts are notable and appreciated. So this is your second episode. Last time we talked about, from your perspective as an AI Conversation Designer, how, when and why to use procedures. And we left people — you can watch that episode, that’s episode eighteen — we left people on the cliffhanger, right? Of, well, you’ve got your procedure live. That’s not the end of it. What do you do after it’s live? Brian, is it like — is this the least important part or the most important part when your procedure is now live?

**Brian (01:01)**
Yeah, so we touched on in the last episode, we touched on actually building a procedure. And with the great help center content that we have, it’s fairly straightforward. It kind of walks us through step by step how to do that. But the real work comes in for a conversation designer after it’s set live, in the iteration that you need to have on a day-to-day basis to make sure that your procedure is performing the way that it should be. And using Operator to do that makes our lives much easier, because before it was just manually making updates in the procedure UI, but now you have like a teammate that you can work with to iterate, to spot blind spots of things that you may have missed, and to have a conversation back and forth about how the procedure should be structured, or things that you can improve, things of that nature.

**Conor Pendergrast (01:52)**
Super. So this is going to be interesting, because we’re going to look at two sides of this. So the first one is we’re going to look at a procedure just in the abstract, what we can do to improve it. And the second one is, I think — I don’t know about your experience, but I think where you get the richer improvements to any support experience, and that’s looking at actual conversations in an efficient and effective way, and to make changes based on that. So let’s talk about the first one, the more abstract one. Like, if you’ve set a procedure live, let’s say you haven’t touched it for like a couple of months, and you’re not quite sure — maybe there was a to-do list that you had, or maybe it was just like, I know I need to change something about this procedure. What’s the tool? What is the tool or what is the approach that you would take to say, go make an incremental improvement to a procedure?

**Brian (02:41)**
Mm-hmm. Well, when you said you set one live and you didn’t look at it for a month, my stomach literally churned. I’m like—

**Conor Pendergrast (02:46)**
Sorry, I’m sorry. I’m just not you, sir. Not you, Brian. You are a professional. I can’t wait six hours, never mind six months.

**Brian (02:51)**
Yeah, yeah, yeah. Yes. Yes. Yeah, yeah. So I think before it was like a vibe check, you know. Like it was, I made this change, you know, I’m looking at the metrics, they dipped a little bit, like, let’s, you know, let’s tweak it here. But now we have this tool, Operator, where we can go in and, you know, you could treat Operator like a teammate who you’re collaborating with on this procedure. And so if you have a pre—

**Conor Pendergrast (03:22)**
Yeah, let’s see it. Let’s see it in action.

**Brian (03:24)**
Sure, for sure. Yeah. And so I have a procedure set live. And I may come into Operator here and say something like: analyze the structure of the subscription cancellation request handling procedure, and provide actionable steps for improvement. Right? So I like to talk to — I know I wouldn’t say this to a human teammate, I guess. Like if, Conor, if you were my teammate, I wouldn’t say this exact sentence to you. Yeah, yeah, but it’s the same idea. Like I might tap a teammate on the shoulder and say, hey, can you look at this procedure, and does anything jump out at you as far as the structure is concerned? Of course we have to format it this way as a prompt, but it’s essentially doing the same thing. I treat it exactly like a teammate, where I’m not going to talk to a teammate and then not ask any follow-up questions, right? It’s — I’m not going to one-shot prompt a teammate. And I kind of treat Operator the same way. And so what it’s doing now is it—

**Conor Pendergrast (04:31)**
It is — so it’s similar to what we were saying last time, which is like, you shouldn’t expect magic in, magic out. This will be an iterative process that you can use to, in this case, look through and provide steps. But you’re going to be the brain. Brian, you’re going to have the brain that filters everything, based on your experience at your company, at Fin, and with customers — really importantly, with the customer support. Like, this is where the value comes. And it’s exactly the same as what I was talking about with Dawn. Like, her rich experience in supporting customers is what makes her a fantastic knowledge manager. And the tools help with that, they don’t replace that. So we’re getting recommendations through from Operator now. And I think it is important to pause here and say, for anyone watching, like, this is not the real Fin workspace, just so you know. Obviously there are challenges around that. So when we’re looking today, Brian’s sharing from a demo workspace, which is why it’s not perfectly aligned with what you would expect from the Fin workspace. Okay, so we’ve got nice colour coding as well, which is good.

**Brian (05:43)**
Mm-hmm. So it gives me an overview of the suggestions. And then it kind of goes into detail about what changes should be made. And as you said, they’re color coded, so like the red is the critical one. It provides a recommended fix. And then there is a structural.

**Conor Pendergrast (06:02)**
So what is the first one? It just says critical. The next one is structural.

**Brian (06:06)**
Yeah. And then it’s looking at the quality of the procedure’s trigger. And then the last one is just polish. The thing I like about this is it’s giving me an overview of what it’s seeing, and then it’s giving me a tangible next step. Now, the tangible next step doesn’t mean that you’re going to implement everything. It’s: okay, now this is a next step that I can take, and I can go back and forth now with Operator to see if this really makes sense for the procedure that you have set up.

**Conor Pendergrast (06:42)**
Yeah, yeah. Okay, so it’s doing things, it’s picking up things like the email is not stored in a temporary attribute, which is really — I mean, definitely useful, because a lot of the time Fin can just use it. But if the procedure — am I right in thinking that, like, if the procedure gets a bit longer, or if the conversation gets a bit longer, it can forget that earlier context, but it will remember it, for example, if it’s stored as a temporary attribute? It’ll remember, or it’ll be able to call it a lot easier if, let’s say, a sub-procedure needs to be run a while later and needs that email address. Is that the idea that Operator’s hitting on there, right?

**Brian (07:23)**
Yep, absolutely, yep.

**Conor Pendergrast (07:25)**
Yeah. And also things like no confirmation before cancellations. I mean, it seems like that’s a really good — if people are designing support processes, in particular in this case in procedures, if you have actions that Fin’s going to be taking, you should have a confirmation step. Especially if there are things like permanent — not permanent, but hard changes to reverse. Like subscription cancellations: always put a confirmation step in there first.

**Brian (07:54)**
Yeah, absolutely. And this kind of highlights what I talked about before, and that’s — Operator is acting like a teammate here. It’s surfacing any blind spots that you may — you know, you’ve probably had the experience, Conor, where you’ve spent a bunch of time on a procedure and it’s almost like you’re in it so deeply that you have blind spots and you don’t realize you missed something. And so this acts like a teammate and it highlights those things. Like, yeah, I should be surfacing an attribute via a temporary attribute, or I need to add a confirmation on this branch. And so it surfaces those things for you through this conversation that you have with it. And then there are follow-up steps. So there are three follow-up prompts that you can click on, and then it can make those changes for you, and then it would apply them to your procedure.

**Conor Pendergrast (08:46)**
Yeah. Yeah. And so for someone who hasn’t used Operator before with a procedure, it doesn’t just, like, make the change and then it’s done. It, like, drafts up the change and gives it back to you to show you before you publish it, right? And then you can also — you should be testing it at that point as well.

**Brian (09:06)**
Yeah, right. So it’s not going to make the change straight away. It’s going to draft it for you. And do you want me to run one of these?

**Conor Pendergrast (09:15)**
Yeah, let’s — maybe we’ll do, yeah, let’s do the last one, because that’s just a single step, so we can just see elegantly how it works. So that’s add a c— so now Operator is going to go and add a cancellation confirmation step before the subscription is cancelled, which I think is probably, like, out of all of them, that’s probably the most important one. The email capture is higher up in the list, but I think not confirmed before cancellation is more important, because, like — probably the temporary attribute is probably just a just-in-case. Whereas, yeah, we should definitely confirm before cancelling. Okay. All right, cool. So this is the procedure. And, right. Okay, so in red what it’s getting rid of, and then replacing it with green. Interesting.

**Brian (10:06)**
Yeah, and so just for some context, I built this test procedure and I built it in a sloppy way on purpose, just to demonstrate. And it’s really cool here how in step five of my original procedure, I didn’t have any conditionals. And here it’s actually added an if-else, and it’s written the conditional statements as well as the step actions after them too. Like, so for example, it’s saying, you know, if the customer confirms they want to permanently cancel their subscription, call this data connector and give them this information; else, you know — and then it provides the else text. So as you mentioned before, it’s not automatically going to make these changes. It’s only going to do that once you click apply all. And then, once you go back, if you click apply all, you go back to the procedure, you’ll see that those changes have been made.

**Conor Pendergrast (11:00)**
So would you do any — I’m just curious, if you were making a change like this through Operator, would you do any testing at this point, or would you wait until it was published and then run through some preview conversations or something like that? Like, what comes to mind in terms of testing a change like this?

**Brian (11:18)**
Yeah, you can continue the conversation and ask follow-up questions based on what you’re seeing here. So for example, we’ll just say: why did you add a conditional branch for step six?

**Conor Pendergrast (11:37)**
Cool. And then it’ll start to work that out and then give you an answer.

**Brian (11:43)**
Yeah, right. Exactly. Yeah, and then you can — yeah. Yeah. So it actually does a really nice job here. It gives you like the specific, you know, a case of what a customer might say and how this change might handle that conversation. Yeah. Yeah.

**Conor Pendergrast (11:58)**
Absolutely. Yeah, that’s great. Cool. So, okay, so we said that we’d look at two things. One of them is like reviewing a procedure through Operator. But I think — I don’t know, I suspect you agree — but the real impact that a procedure can have is obviously on actual customers, and the real test of a procedure — we can test it internally as much as you want, but it’s really only when it starts to get interacted with by its intended audience that you really see how a procedure performs. Talk to me about, what’s your approach once you have a procedure live and you want to see how it’s working and make sure that you can be confident when it’s working? Because I suspect that my current approach is probably not the best one, which is I just look at customer conversations that go through the procedure.

**Brian (12:48)**
Yeah, well, so you’re absolutely right that things get real once the customer conversations start coming in. You can test, you can have simulations, but it’s never quite going to match the nuance, the complexity, the edge-caseiness, if that’s a word, of some of the customer inbound conversations. And so having and reviewing those conversations is kind of the next step in this iterative, iterative process. But I want to touch on something you just said. You said that your approach of manually reviewing conversations is maybe not the best approach. And I would say, I think I disagree with that. I think humans, at least within Fin, are moving more and more into this like specialization role where we really are product experts, not just understanding the help content, but the nuances of customer issues — this catalog of experience that you have as a human dealing with other humans trying to troubleshoot issues. So I think human manual QA, though cumbersome, is still really important to keep yourself planted into what’s happening with customers and what they’re asking about. So I do think that’s part of it. I think though that there is another piece, now that we have access to Operator and we have access to monitors. Monitors is kind of sort of a game changer in reviewing or QAing Fin conversations. And so would you like me to walk you through what a monitor is, and how we set it up, and what it does?

**Conor Pendergrast (14:30)**
I would love that. I would love that. So if we’re thinking in particular, let’s open up monitors and let’s have a think, if you could talk us through, like, how would it work in a procedure context. So we’ve got our procedure live now. And let’s say we’ve evolved — so let’s assume, so certainly what I do, and I think is those, like, handcrafted, organic, small-batch customer conversation reviews. I think that works really well in those early stages of a new procedure, or when you’re making significant changes that you have tested and have simulated but want that extra confidence. But it’s the, like, two weeks later that I think that I’m missing. That’s the gap where I’m looking to see how monitors can fill it. It’s that, like, I don’t want to look at conversations — once I’m confident that it’s live, I don’t want to look at conversations every day for a particular procedure, especially when we have like 20 live procedures for a client account, that doesn’t make sense. But I don’t want to take my eye off the ball, because, to give an example, I just had to do a big overhaul of a procedure for a client recently, because the data was coming back differently from a data connector. And I caught that because I was manually reviewing conversations, by chance. And I think that monitors possibly could have picked that up a little bit better. So I’m curious about, can we take a look at a monitor, or creating a monitor, and you talk us through, like, your approach as a conversation designer at Fin?

**Brian (15:59)**
Sure. Yeah, you make a great point where you set this thing live and then there are, like, you know, thousands of inbound conversations, and it’s almost overwhelming. Like, what do I do? What do I do? I can’t manually review all of these conversations. And really monitors help solve that problem for you. And so you can see here, if we’re going in to create a monitor, you have these different templates here. And let’s do — we’ll do a low answer quality.

**Conor Pendergrast (16:33)**
Super.

**Brian (16:34)**
Yeah. So we’ll come in and we have to add a scorecard. So a scorecard is exactly what it sounds like. Each conversation that enters the monitor will be judged against a specific scorecard. And we could maybe later on we could go through how to set up a scorecard, but for now I’ll just show you how to set one of these up. So you can see here, with this low answer quality monitor, there are already two filters that are populated for you. And so, low answer quality — in this case we have the CX score is one. And, you know, each CX score has a reason tied to it. And so one of the reasons could be Fin just gave a low quality answer. And so what this monitor would do is, whenever a conversation meets these criteria, the monitor would collect it for you. It would flag it for you, right? All right. So this solves the problem of those thousands of conversations coming in. You don’t know which ones to look at. You can define which ones exactly you want to look at. Because, you know, you’re dealing with a bunch of customers, or all of us don’t have enough time. This does all that work for you. And so it serves it up for you however you want. Now, there’s another filter that I wanted to point out, because I’m not sure everyone realizes that it exists, but when you’re talking about procedures, you can also throw in this. Yeah, right? So what I did here is we can filter on a specific procedure, right? And so we can look at the one that we were just looking at. And so then the filters would be: has a low CX score, the reason is low answer quality, and it was a conversation which triggered such and such procedure. Right. Then we’d save it.

**Conor Pendergrast (18:28)**
Yeah. And to dig into why this particular thing, why we’re harping on about it, is because I looked at procedures a long time ago and, like, ninety percent of my work is in procedures and data connectors. And I wanted to use monitors and it just wasn’t doing the job that it needed to do for me, which was monitor the performance of procedures, because it didn’t have that filter. And so in my mind I just kind of discarded monitors as a solution to the problem, the real problem that I have. And Brian has added the context that this exists because of feedback from people using monitors, and from people who are using monitors specifically to monitor the quality of conversations coming through through procedures. So this is a really good example of, like, Fin dogfooding Fin. And I’m very grateful to you, Brian, and to everyone on your teams, for getting this added. This is a big improvement for me.

**Brian (19:30)**
Yeah, yeah. I can’t take credit for it. It was my teammate Carl who — maybe—

**Conor Pendergrast (19:34)**
Thank you, Carl.

**Brian (19:35)**
Yeah, Carl, who’s another conversation designer, he’s the one who really pushed for this, because he was having the same experiences that you are. It’s like, why, you know, why isn’t there a filter for procedures? And so yeah, this is just a small example of how closely we work with our product team, and like we’re constantly using these new products and then providing feedback to them. And we’re trying to put ourselves in your position where, what would customers be wanting? What functionality would they need? And then we provide that feedback. And a lot of times, you know, you’ll see that change made. So I love that — that’s one thing I really love about working with the product team, is how receptive they are to our feedback.

**Conor Pendergrast (20:12)**
Yes. Super. Okay. So these are the sort of filters that someone could use. I like this approach of narrowing down the conversations that you’re looking at to something that is actionable for you. And that’s going to depend on, like, what you’re trying to do here. So for me, this is kind of the perfect — this is genuinely the perfect set of filters. It’s about a specific procedure, it’s about a specific type of, or specific CX score reason. And it’s only the terrible conversations that have gone really poorly. This is, unfortunately, the majority of my day is spent tackling those conversations. And I love to see the ones that go smoothly, but the ones that go smoothly, they’re fine. And so you save these filters and then, like, is there anything else you do with the monitor? Like, obviously again, this is your demo workspace, but if this was a real workspace, what — do you set up reviewers? I’m curious about whether you set yourself as a reviewer or anything like that.

**Brian (21:15)**
I do. So if we’re talking about our production workspace, I do my Fin QA every Wednesday afternoon. I have a couple of monitors that I look at. Most of them are related to customer or user effort — or customer effort. Like, how hard did an end user, or one of our customers, have to work to get an answer or to be passed to a human, for example. It will flag all those conversations. I set myself as the reviewer. Like you, I don’t have time to review a hundred conversations every Wednesday, but what I do is — so you have the opportunity to do a continuous thing where any time a conversation comes in, there’s a one-time sample. I do a scheduled sample every week. I think I’m looking at twenty-five conversations, and I find that’s really good because it allows me to get a nice sample, but at the same time I can go in depth and really look at them, instead of seeing, god, I have five hundred of these conversations I have to review, I have to get through them quickly. I can spend some time and really get an understanding of the issue.

**Conor Pendergrast (22:23)**
Super. That’s another new thing since I first looked at monitors as well, I have to say — the scheduled sample. That also takes my stress levels down quite a bit, because I had the exact same feeling that you just described, which is the, like, a hundred conversations — boy, that sounds like a lot. Twenty-five is reasonable. Yeah. A hundred, whew.

**Brian (22:43)**
Yeah, yeah. And then I’ll also mention that we also have, like, aside from me, we also have like a whole other team of human support team members who have out-of-the-inbox time every week to do the same thing. So we have this coming from many different angles. They’re providing feedback and we’re actioning any trends or anything like that, anything that we see repeatedly. Then it would become, you know, my focus on Thursday morning when I come into work is actioning the feedback that we’re getting from these monitors.

**Conor Pendergrast (23:18)**
Yeah. Cool. Okay. Okay, great. So then you create the monitor. And then what, like, what does it look like to actually — we don’t have to create this one, but can we look at one that’s already live and, like, think about what you would do?

**Brian (23:34)**
Yeah, I gotcha. I gotcha. So in preparation for our chat today, I put together a monitor, and for this specific instance, I didn’t set any filters for it. So it just kind of took all Fin-involved conversations. But you can see here that—

**Conor Pendergrast (23:50)**
Sure. And once again we will say this is a demo workspace.

**Brian (23:54)**
Yeah, right, right. So you can see that it’s compiled a bunch of Fin-involved conversations. And then you can take a look at how it did on the scorecard. And then what you could do is you can come in here and you can manually review it. So actually, this is what I do every Wednesday. So I have my 25 conversations, I come in one by one, I read through it, because at the end of the day, I’m like — this again is a suggestion from Operator. It’s not the end all be all, right? There’s lots of nuance, there’s lots of edge cases, there’s lots of things that maybe slip through the cracks, and a human specialist really needs to go in and give it a second pair of eyes. And so I’ll come in, I’ll add some notes. Like, for example, I’ll see conversations where a customer will write in — like an unidentified customer will write in from like [intercom.com](http://intercom.com) or fin.ai, and they’ll think that the messenger is just like ChatGPT. So it’ll be completely unrelated. But it might flag the conversation as like a poor customer experience. And then I’ll add a note saying like, this is like a wrong support question. And so then when we go back to it we’ll know that this wasn’t related to actual anything to do with Fin.

**Conor Pendergrast (25:07)**
Yeah. It’s not something to be concerned by.

**Brian (25:10)**
Yeah. And but then this is another feature that was just added, where — now, right, so one of the things that I — and this was added due to feedback as well — where you’ll notice some issue. Let’s say this is a legitimate issue, whether it’s related to knowledge, or it’s related to guidance, or maybe how a procedure is structured. You can come in here now and create a tracker ticket. And so the tracker ticket essentially — you can create like a general name of the tracker ticket, and then it will begin tracking all of those specific issues, and whenever you see that issue you can add to it. You can go back and say, whoa, you know, this gives even more relevance to, like, specific issues. But if you see that there are like 15 of something that’s similar, we know that we have to action the issue.

**Conor Pendergrast (26:06)**
Yeah, so I’d like to really pause there, because I saw recently issues getting added, and I think conversation reviews is a perfect example of where you can use issues and the tracker tickets. So, because, to address, like, the thing that I always feel is a bit stressful about conversation reviews is I feel a lot of the time that there’s this sort of impetus to make the change immediately. And if you’re reviewing 25 low quality conversations, you could easily have 50 things that you want to change. And so that’s not a good approach to take. What you should be doing is saying, okay, well, if it’s non-urgent, like it’s not entirely broken, then you prioritise the problems that you’re seeing with the procedure in this case, and then over time you gather examples of it and then you tackle them in order of prioritisation. It’s not just like, first in, first solved. You apply a prioritisation framework based on, like, for example, how many conversations are affected, or how severe the effect is as well, and the impact that it’s having on customers. You know, is it Fin just providing slightly confusing information, or is it Fin providing entirely misleading information, and that has to be solved in the procedure? So I think issues is a great way of doing that, and a real way of lowering the stress level when you’re doing conversation reviews, because you don’t have to fix it immediately. You can aggregate them and then tackle them based on a priority approach instead.

**Brian (27:42)**
I love that. I love that. Because I sort of was doing the same thing that you just mentioned, where I’d be reviewing these 25 conversations and, like, the first five that I reviewed, maybe they were legitimate issues — not like the house is burning down type issues, but like things that definitely need to be actioned. But if you go off and try to action each one of them external of your review, like, you’re going to lose track of everything, and you may not even come back to it. You know? And so this keeps it all in one place. And as you said, it allows you to prioritize issues as you add them to the tracker ticket, to see how prevalent the issue is. And I’ll take it even a step further. Is like, when we see these issues and we see that there are, you know, let’s say 10 — have added 10 conversations to a tracker ticket — then it might be an issue of having to get our product engineers involved, where they have to go in and investigate and actually make, you know, it could be related to like maybe a bug or something. And so being able to provide, you know, 10 examples of it to the engineering team is going to allow them to make changes that much quicker. They’re going to be able to improve and ship a fix easier when they have these examples to look at.

**Conor Pendergrast (29:00)**
Yep. And don’t rely on your memory. Well, maybe your memory’s better than mine, but don’t rely on my memory anyway. This is why I use so many tools.

**Brian (29:07)**
Conor, can I plug another article?

**Conor Pendergrast (29:13)**
Yeah, of course you can. Is it another one that you updated?

**Brian (29:14)**
Yeah. Yeah. Yeah. Here we go. I was going to suggest this one. So this article here, using monitors to find and fix Fin answer issues, is essentially what we just talked about, but it highlights the importance of humans. So, right. Humans are still the specialists. We’re still the experts. But as, Conor, you mentioned, and how I feel the same thing, we’re overwhelmed with the number of conversations coming in. We need a way to be able to sort them and to surface the ones that are most relevant to what we’re trying to achieve. And this article kind of takes you through how you are not taking a back seat to AI, but you’re partnering with Fin. In order for Fin to surface these things, but then the human is going to decide: okay, do you agree with the assessment that Fin has made? And if it needs to be, you know, we need to submit a ticket, a tracker ticket, for another team to take a look at. Essentially you’re making the final call on these things with the help of these Fin monitors.

**Conor Pendergrast (30:21)**
So, and so maybe the obvious next step is like, okay, cool, Brian, now all I’ve got is problems. Do you have any solutions? So what’s the next thing? So am I right that you can use Operator with an issue to go through, like, the conversations in the issue as well? And if that is what you do, or do you use Operator in a different way when it comes to monitors?

**Brian (30:47)**
You absolutely can, you absolutely can use Operator to iterate. Are you talking about specific conversations?

**Conor Pendergrast (30:54)**
Yeah, let’s talk about that. Like, well, let’s think, like, we’ve got conversations, you’ve got this monitor set up. What do you do from here? I can see the nice Operator button in the top right there, but how do you use it in a monitor sense?

**Brian (31:09)**
Yeah, okay. So I’m going through here to see if there are any specific examples that we can use. We have — yeah.

**Conor Pendergrast (31:15)**
Once again, challenging, because it is a demo workspace.

**Brian (31:18)**
Yeah, okay. So I took you through how we set up the monitor. So the monitor now is filtering out based on the procedure, and then it’s based on customer effort, right? So it’s done the job there. So we have surfaced, you know, twenty-five conversations which meet this criteria. I then go through and I manually QA these conversations to basically confirm what the monitor has surfaced to me. And then I will basically create, you know, add specific glaring issues to tracker tickets. So I’ll go through, I’ll do all of the QA, and then once I’m done with the QA, I will spot any trends. And then from there, I decide, okay, this issue needs to be flagged to my CS Ops team. This one needs to be flagged for the knowledge team. This is in my wheelhouse. This is a procedure change that I need to make. And so I have the monitor surface all of the conversations, and then I will then, as a human, separate, divide, and reach out to the specific team or people, but in an actionable way. Hey, I’m seeing — and I mentioned this here in the article where — yeah. And so now that the monitor has done all of the work and surfaced it, it allows me to frame my recommendations in a way where somebody can hit the ground running. Right? It’s all packaged and ready to go. I can spend my mental energy on using higher level critical thinking skills, rather than just, like, picking out conversations, rather than just doing manual reviews. I can connect the dots and then reach out to the specific teams, provide them something actionable that they can take a look at.

**Conor Pendergrast (33:16)**
Yeah. So that’s your natural next step, is basically like, you’ve got a group of issues now, with tracker tickets for those. You make sure that the people who are the most likely to solve them are aware that they exist. And so if it’s you, if it’s one of your procedures, for example, that needs a bit of work — what do you do next? Like, do you just go back to the procedure? Do you dig into the conversation?

**Brian (33:46)**
Yeah. So you come into the conversation. Let’s say I determined that in this conversation, the issue was the procedure didn’t perform the way that it was expected, or not the way that we wanted it to. And so I will then, in that subset of conversations that I’ve flagged, I will come in here and really scrutinize, like, the Fin thoughts and the conversation events in the conversation. So let’s see if we can pull up the whole conversation. And so up here you can—

**Conor Pendergrast (34:21)**
So for people who haven’t seen it, yeah, perfect.

**Brian (34:23)**
Thank you. Thank you. Yeah, and so you can see, before we add the conversation events, the conversation looks a lot cleaner, but when you add this, this is like the conversation designer’s best friend, where you can come in here and really look at what Fin was thinking, and why it said what it said, or why it triggered a specific procedure or guidance. And so then what I’ll do is, if I determine that it was related to a procedure, usually in the part in the conversation that it broke down, I can come in here and say, this was related to step 3.4. I’m going to go back into the procedure. I may even ask Operator about it, like, okay, take a look at step 3.4. While Operator’s doing its thing, I’ll do my own human investigation and I’ll come back, and we’ll — I’ll try to, like, I use it to — I kind of, like, try to triangulate on a cause. And so I’ll see if Operator is giving me the same information that my gut is telling me based on what I’m seeing, and then I’ll work out a solution that way.

**Conor Pendergrast (35:28)**
Yeah. Okay, interesting. You do both approaches. So I agree. I think the most common error I make is in conditions. And is where I have like code-based conditions, and then I accidentally don’t have the right variable that’s called in the code-based conditions. And so then poor Fin is just like, I don’t know what to do here. I really don’t know what to do. And it’s like, and God bless Fin, it does try its best, and it usually will, like, muddle through with something, because it can see what it’s supposed to be doing most of the time. And it’s just that I’ve given it terrible steps and terrible conditions, and it’s trying its best. But Operator will often be like, hey, this is what you missed. You just need to, like, account for the fact that there sometimes won’t be a variable here, and to handle it that way. Okay, that’s really good. And then I guess the process starts again. So you’ve come here, you’ve gone through the conversation, you’ve found the flaw, you’ve worked with Operator to fix the conditions that Conor was stupid and set. You save that, and then the monitors catch the future problems, and you just keep improving the support experience.

**Brian (36:38)**
That’s the name of the game.

**Conor Pendergrast (36:40)**
Yeah, that’s super. Well, Brian, like, I think this is definitely one of our longer ones, and I think also one of our most helpful ones. We talked last episode, in episode eighteen, about that idea of moving from that first stage of informational conversations to the second stage of personalised and then action-based conversations. And I think if you’re in those latter two stages, this sort of approach, this iterative approach, but also taking the responsibility of monitoring conversations and doing that consistently — I think this is a really, really effective approach. I am convinced to add monitors into my arsenal of tools, to my little toolbox. And I’m excited to — I’ll start sending you some screenshots of the resulting monitor successes I have.

**Brian (37:25)**
Love it. Love it.

**Conor Pendergrast (37:28)**
Cool. Brian, thank you very much for your time. If someone wants to find out more about you or see what you’re working on now, where can they find you, and how can they be most helpful to you?

**Brian (37:43)**
Yeah, you can just reach out to me on LinkedIn, Brian Branca on LinkedIn. Reach out, say hello. I’d be happy to talk to you or chat through any of your ideas there.

**Conor Pendergrast (37:52)**
Lovely. And if you want to see future episodes of Support Stack, you can just gently, gently nudge that subscribe button. You can also find my daily email, all about Fin the AI agent rather than my obsessions over Fin employees — you can see that at customersuccess.cx/daily. Other than that, thank you so much and goodbye.
