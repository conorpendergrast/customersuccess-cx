---
title: "Support Stack Solo Ep 04: Past the 50% Plateau — The Three Stages of Fin Resolution"
publishDate: "2026-08-26T08:30:44.690Z"
episode: 4
format: solo
youtubeId: "ouCINCriH_4"
thumbnail: "https://images.squarespace-cdn.com/content/v1/660d2c98e2a6e9221e25e9c3/1786978858428-4LGGA4IQTHPS6RS2XKK8/Support+Stack+Solo+YouTube+Thumbnail+E04.png"
excerpt: "Teams get Fin to around 50% resolution and plateau — here are the three stages of AI resolution, and how to move to the next one even without engineering time."
resources:
  - {"label":"Support Stack E16 — the 14-factor content readiness checklist, with Dawn Perrott","url":"https://www.customersuccess.cx/support-stack/support-stack-e16-the-14-factor-checklist-that-makes-fin-actually-find-your-content-with-dawn-perrott-fin"}
  - {"label":"Support Stack E13 — Fin handles the easy stuff, now QA gets harder, with Thomas Hils","url":"https://www.customersuccess.cx/support-stack/support-stack-e13-fin-handles-the-easy-stuff-now-qa-gets-harder"}
squarespaceUrl: "https://www.customersuccess.cx/support-stack/support-stack-solo-ep-04-past-the-50-plateau-the-three-stages-of-fin-resolution"
---

There’s a pattern I see over and over. A team gets set up, switches Fin on, does a decent job of it, and lands at around a 50% resolution rate. Then it stops. Three years ago I’d have bitten your hand off for 54% resolution across a 120-person support org — and it’s still a solid number — but it’s also a ceiling, because content alone can only ever answer general questions that aren’t specific to the person asking. Adding more help articles won’t move it.

In this solo episode I map the three stages of how a customer can interact with an AI agent: informational answers from your content, personalised answers tailored to who’s asking, and actions where Fin actually does the thing. I walk through what “stage one done properly” really requires — content that’s up to date, updated promptly through a systematic process, audited and rewritten for Fin’s retrievability, and checked by regular conversation reviews rather than a one-off audit — plus the signals that tell you you’ve hit the ceiling, including Fin hedging its answers with “if you’re an admin, if you’re on this plan, if this setting is enabled”. Then, live in my Intercom workspace, I show a content-only answer, a personalised answer from a contact-level attribute, and a personalised answer pulled through a data connector, with a simple rule for choosing between the two: static and simple means an attribute, dynamic or complex means a data connector.

The last part is the one most people assume is out of reach. Stage three normally needs data connectors that write data rather than just read it, which means engineering time a lot of teams simply haven’t got. So I show the shortcut: a “loop in a teammate” step inside a Procedure, where Fin gathers everything, hands a teammate the one click they’re genuinely needed for, and then closes the loop and handles the follow-up itself — demonstrated on a real subscription downgrade. If you own Fin content, run a help centre, or you’re an Intercom admin trying to work out what to build next, this is a practical look at how to get unstuck and move to the next stage.

## Episode transcript

**Conor Pendergrast (00:00)**
Hello, I’m Conor Pendergrast and welcome to episode four of Support Stack Solo, where today we’re talking about getting past the 50% plateau.

**Conor Pendergrast (00:15)**
So here is the pattern that I see fairly often, which is exactly what I’m saying here: the 50% plateau. So teams get set up, they switch on their AI agent. Usually I’m talking to people who are using Fin, Intercom Fin, an AI agent. And they get their setup okay, and then they hit around a 50% resolution rate. And it just sort of — it just kind of plateaus.

**Conor Pendergrast (00:44)**
So what I wanted to talk about is the three models of AI agents interacting with customers, and how you can progress along that pathway.

**Conor Pendergrast (00:57)**
So, content alone. Basically the first stage is content, and just your content. And it gets you pretty far. Like, if you think about it — if I think about, I don’t know, three years ago, if someone had come to me and said, “Hey Conor, you’ve got a support team of 120 people in-house and outsourced, you’re interacting with hundreds of conversations per day. What would you give for a 54% resolution rate?” I would bite your hand off. I really would.

**Conor Pendergrast (01:26)**
And now it’s just like, a 54% resolution rate is kind of like — it’s very mid-tier. It’s good, it’s great, it’s solid. But it’s what content alone will get you there. And so content has a ceiling, because these are informational questions. These are the questions that are just general questions, not specific to the user and not able to take action. And so, as you see in my little chart, let’s say you get it to a 54% resolution rate. It’s a very respectable resolution rate. Adding more help content isn’t going to get you there.

**Conor Pendergrast (02:01)**
And so there really are three stages to how your customers can interact with your AI agent, be that Fin or a different AI agent. And the first one is informational. So, Fin is well equipped to answer questions that are informational in nature. You should always start here. There is no point in going further unless you’ve really, really — like, really dug in and invested in your informational answers. So these are general answers from content.

**Conor Pendergrast (02:33)**
The second then is personalized answers. So it’s answers tailored to the person that Fin is talking to, or whoever your AI agent is. The person that Fin is talking to gets a personalized answer based on their scenario. That’s the next level. That’s the second stage of this.

**Conor Pendergrast (02:52)**
And then the third: actions. And this is giving Fin the ability to take action based on who they’re talking to, in this user account, and actually do the thing.

**Conor Pendergrast (03:03)**
So let’s dig into those. So, information is very simple, really, in a lot of ways. Like, it’s the easiest one for people to grasp. It is answers from your help content. So your help content, in an Intercom and Fin sense, that’s going to be public help articles, that’s going to be internal articles, that’s going to be content snippets. And it’s also going to be guidance and external web sources. External web sources could be something like your marketing website, though that can be a little bit risky sometimes, or maybe a newsfeed, or your community sometimes as well.

**Conor Pendergrast (03:36)**
So stage one is where the answers are coming from your help content, like I said. But stage one done properly is different to just getting your content right. I do hear — I’ve got some survey results, I’ve got anecdotal evidence that people think that they’ve done okay here, but what they haven’t really done is absolutely nailed this. Because this is, funnily enough, this is partly about your support team and your support organization, but it’s not just about your support team and support organization.

**Conor Pendergrast (04:10)**
So, stage one done properly. Content is up to date, and is updated promptly via a systematic process. So those are two different things, in a way. Content that’s up to date means all the retrospective information. Like, if you’ve just joined as a support leader in an organization and that company’s been going for, let’s say, five years — like, are the five years’ worth of changes, are they all live? If you looked at the help articles, do they have up to date screenshots with the new logo that was different to the one that was three weeks ago? Does it have the new UI labels in there? Is it all showing correctly, up to date? All the retrospective information?

**Conor Pendergrast (04:49)**
And then what about the future changes? What about the product changes that are happening this week, tomorrow? Are they all going to go live? Are those going to go live in your help center at the same time as the product change? At the same time as plans change — subscription plans change, change names, for example. If you’re overhauling those, are those going to go live at the same time in your help center? Or are they going to lag by a couple of days, couple of weeks, couple of months?

**Conor Pendergrast (05:19)**
It’s easier than ever to get this stuff right, but you have to have a systematic process to do it. That’s the first and critical step.

**Conor Pendergrast (05:28)**
The second one is: has all of your content been audited and updated, rewritten for human and AI — Fin — retrievability and understanding? So, can Fin find it? Can Fin work out what it’s telling it? And can it then bring it back to the user? So does it have all of the structure and all of the formatting and all of the answers? If you’re looking for a hint on how to do this, by the way, my episode with Dawn, Support Stack episode 16, was exactly about this and the content readiness framework.

**Conor Pendergrast (06:01)**
And then lastly, are you doing regular conversation reviews to confirm that the content is still holding up? So it’s an ongoing habit, not a one-off audit. You would be surprised at how few people are actually regularly looking at customer conversations. Like, the quantitative data is really important. The qualitative data is really critical as well. And you can do this systematically through AI — you should look at the episode that I did with Thomas Hils about this, where we talked specifically about using Claude to pull in those. But you can also just, you know, look at five conversations a day. It’s not going to take you a lot of time, but you will learn a lot.

**Conor Pendergrast (06:40)**
So that’s stage one done right. If you have not done these three, then do not proceed onwards. You will just create a lot more chaos. It will be a lot more confusing.

**Conor Pendergrast (06:50)**
So how you know that you’ve hit the ceiling is: your resolution rate plateaus, your CX scores don’t get any better, your customer support is not getting any better through Fin, and you’ve done all these steps. And you’re seeing Fin is hedging a lot more. So, “if you’re an admin”, “if you’re on this plan”, “if this setting is enabled”. So it’s correct, yeah. And it is complete, but it’s not specific to the person it’s talking to.

**Conor Pendergrast (07:17)**
So if you’ve done all three, let me show you an example of what that looks like. So here’s an example of a content-only answer. So this is the stage one, it’s just general information, informational questions. You’ve got a question that comes in, and Fin answers it well according to the content that it has available. So it shows you the sources — you’ve already seen that, probably — and then it uses its guidance as well. So this is just content. It’s not personalized to the person who it’s speaking to, and it’s not using anything more advanced like a Procedure or data connectors to pull in more information about the person it’s speaking to. Just simple, just gets to the answer.

**Conor Pendergrast (07:52)**
But there are other stages. Like, you can see, “it depends what you mean.” So it doesn’t go through a process of picking out more information from the customer, either from what it knows already or anything else, or asking any more detailed questions.

**Conor Pendergrast (08:05)**
And so then, if we want to personalize it, if we want to make it more specific to the person that Fin’s talking to, that’s where we got to personalization. So this is tailoring the answers to who’s asking. So there are two real ways of doing this. You can use attributes, or you can use data connectors. Let me talk about the pros and cons of each.

**Conor Pendergrast (08:22)**
So attributes: you can have those at the company level, or you can have those at the individual person, user level. So they are — I like to say that they are for static-ish information. It’s not information that’s going to change on a regular basis. Broadly speaking, it’s just like one piece of information. So the user’s role within the organization, or the user’s subscription plan, or their subscription status, for example. That stuff doesn’t change every five minutes. Doesn’t change once a day. Might change once a month at most, really. So that typically gets synced daily, or when the change happens as well. Ideally when the change happens, but you know, not everyone can invest in that technical sort of approach.

**Conor Pendergrast (09:06)**
So, attributes: Fin can read them, Fin can use guidance to better interpret them, and then Fin can also interpret your help content based on these attributes as well — which is why your help content is the first and most critical part. You’ve got to get your stage one done well before you go any further.

**Conor Pendergrast (09:22)**
So the second example of personalization is data connectors. So data connectors are for more dynamic, or complex, or rapidly changing information. So this would be something like full permission sets, or any sort of product access, or it could be information about a specific booking that the customer has, a specific order the customer has, a specific way that they use your product. It’s real time, which means it’s pulling the information in as it needs to, independently in this case, via a data connector. And it’s JSON, just in case you’re curious about the technical side of it.

**Conor Pendergrast (10:02)**
So the basic breakdown that I like to say is: is it static and simple? Then use an attribute. Is it dynamic or complex? Then use a data connector. When in doubt, data connector’s probably fine.

**Conor Pendergrast (10:12)**
So let me show a personalized response. So we’ve got this question here: “What’s my user role?” And what I’ve actually done is set it up so that the user roles are pushed into Intercom at the contact level. And so that means that this person, Lily Campbell — Fin is able to say, “Okay, you’re a wellness champion. Means you have access to these kind of things.”

**Conor Pendergrast (10:39)**
And so in a real world scenario, this is what exactly would allow Fin to better understand the information that it’s got about the customer, and then interpret your help content. So once again, your help content is the most critical part. So I have the user level contact attribute, and then I also have guidance in here as well to tell Fin a little bit more. So for example, it helps interpret and present it in a better way. So “wellness champion” becomes a wellness champion with the better presentation, rather than that just kind of technical looking, bit weird, underscore sort of wording.

**Conor Pendergrast (11:16)**
So that is what it looks like when you have a personalized response. This is a simple one, just from an attribute. To show you an example from a data connector: “Hey Fin, what plan is my company subscribed to?” And because there’s a data connector here, it pulls in the information from the “get company subscription information” and it says your company is on the growth plan, and then talks about the status, the billing cycle and the renewal date. And so that’s an example of using a data connector to personalize the information. So Fin could also use this data connector as a standalone data connector to pull information about the user and then, again, interpret your help content.

**Conor Pendergrast (12:00)**
So then the third step. Let’s say you’ve done really well. You’ve got your information in there, you’re totally handling informational questions, your Fin’s doing really well with personalized questions, but it’s the action side of it that Fin is actually struggling with. It’s actually doing the thing. And this is where you get into more advanced data connectors, or into Procedures. So that’s giving Fin the ability to do the thing.

**Conor Pendergrast (12:27)**
As some examples, it’s no longer describing the solutions and actually doing the solutions, instead of always handing over for your team, for them to do, or for the customer to do it themselves. So, deleting a user account, sending a reset link, repushing data to different systems. If you’ve got integrations with third parties, maybe one of your troubleshooting steps, or maybe one of your solutions is, “Okay, we’ll repush that now.” These actions all live inside data connectors, but this time it’s actually writing information and making changes, and not just reading information.

**Conor Pendergrast (12:59)**
It also involves Procedures as well. So Procedures allow you to script out an interaction with a little bit of flexibility to it, and then take actions through data connectors if you need to as well.

**Conor Pendergrast (13:13)**
So this all sounds great, but what if you don’t have the ability to just magically create new data connectors, and what if you’re working through the process of that and there’s a huge backlog? I’ll often find that there’s some teams who still don’t have great customer support engineering roles, or technical support specialist, or technical operations specialists, anything like that — or even don’t have an AI agent who’s coding with them and who can then get a lot of this work done. That sort of stuff, it’s still somewhat rare in some of the smaller organizations, to have that sort of dedicated or non-dedicated resource.

**Conor Pendergrast (13:52)**
What you can do is you can still make a lot of this work by using Procedures in a very specific way. So you can loop in a teammate. So this is a bit of a shortcut. So if you’re watching this video and you’re like, “Conor, I would love to be able to do this, but the problem is I just don’t have the technical resources to actually make these changes and bring in these data connectors and get everything online and work it out” — well, you can still do this through looping in a teammate.

**Conor Pendergrast (14:24)**
In essence, it’s just these three steps. Fin, through the Procedure, gathers the information that’s needed and hands it temporarily to the teammate. The teammate does the action, and then Fin closes the loop.

**Conor Pendergrast (14:37)**
What’s really nice about this is that Fin is handling the back and forth. And so the teammate just gets the exact information it needs and then takes the action themselves through the system. There’s no need to hook up Fin to any systems or anything like that. And you can really improve your customer support experience and your teammate experience as well, before the engineering is done.

**Conor Pendergrast (14:58)**
If the customer gets through this and then ends up with a really simple question afterwards, it’s not still staying with your teammate. Your teammate doesn’t have to do that follow up work at all. Fin is able to handle that follow up.

**Conor Pendergrast (15:10)**
So let me show you what that would look like. So this is my Procedure about handling customer subscription changes or cancellation requests. This is just in my demo account, so I’m not showing you anything too special. And within here, you can see that there are instructions to — this does use a data connector here to pull in information, but later on it doesn’t have to use it to update it. And so it says, okay, well, you’ve got some conditions in here, but eventually it ends up with a downgrade request.

**Conor Pendergrast (15:36)**
So in this case, I’ve looped — the action is called “loop in a teammate or agent”. And so this asks the question, “Can I downgrade this customer?” But you could similarly say, “Hey, can you downgrade this customer?” And so what it does is it collects information: is it safe to proceed, or rejection reasons? So it’s true or false, and text, and then uses it later. In this case, I’ve given it 10 minutes, because let’s say we’ve got really quick response times, but you could increase it to hours as well. So you could set it to 24 hours.

**Conor Pendergrast (16:10)**
So this is an example of just getting permission from a teammate, but you could also change this so that it’s only about, “Hey, please will you downgrade this user?” And then if it’s confirmed and they do downgrade, then great, Fin will handle a follow up conversation.

**Conor Pendergrast (16:30)**
So let me show you what that looks like in a conversation. So here’s the downgrade interaction. Confirms the plan that they’re currently on. And then it says, okay, this is the one I want to downgrade to. And then it passes it to the teammate. And the teammate, in the actual conversation, gets a couple of options and you click on those — safe to proceed — and then in this case, I had the Procedure set up for Fin to handle it. But again, you can set this up so that the teammate is doing all the handling of the conversation instead, and Fin is just the one handling the interaction.

**Conor Pendergrast (17:00)**
So it’s a really simple way, if you think about it, of quickly getting something online without having to wait for that data connector to be available to make those upgrades. Because a lot of the time, especially with something like billing, a lot of the time you’re touching multiple systems and it can be quite a difficult change to make.

**Conor Pendergrast (17:20)**
So, as I always say, your AI, Fin, is only as good as the data that you let it see. So when you’re doing data connectors, for example, you’ve got to be passing secure user IDs. You’ve also got to review all the data that Fin gets back through your data connector, and then give Fin instructions on interpretation.

**Conor Pendergrast (17:38)**
So, what does that look like? That looks like having better labeling for data connector responses, giving Fin the exact wording of what it says in your help centers, because the content is the underlying structure — and making sure that that all aligns with your actual product. So maybe on the API level, maybe the information you get back is a three year old, out of date set of company subscription plans, for example. You can relabel those in your data connector, so Fin only sees and only understands the name of the actual subscription plans as of today. Because again, Fin is only as good as the data that you feed it and the content that you’re feeding it as well.

**Conor Pendergrast (18:27)**
So that’s my question to you. What is the simple but personal request that still hits your human teams today? Start there. If you’ve plateaued at information, if you’ve definitely got well read, well understandable, well scannable, well retrievable information in there, you’re updating it consistently, there’s nothing that’s out of date in there — then congratulations, you’ve moved past the informational stage and it’s time to go into personalization.

**Conor Pendergrast (18:54)**
You can also think about this in terms of topics. So maybe there are specific topics where you’re in stage one still, and there are other topics where you’re all the way up in stage three. Just depends on the impact that you want to have, the company direction, the strategy there, and the resources that you have available. But think about it: if you’ve got a topic that’s only at stage one level now, what is the stage two push, the personalization push, that you could make?

**Conor Pendergrast (19:18)**
If you like this, subscribe to the YouTube channel. You can get future emails from me — I do a weekdaily about Fin, weekdaily email, [customersuccess.cx/daily](http://customersuccess.cx/daily). You can email me, [conor@customersuccess.cx](mailto:conor@customersuccess.cx), for any follow-up questions. I might even turn it into a future video.

**Conor Pendergrast (19:34)**
This is all based on a conversation that I’d had with a company who really were only in the stage one. And so I was describing how you push onwards. Yeah. I hope you found it useful, and I’ll see you again next time.
