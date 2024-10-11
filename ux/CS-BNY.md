### Case Study: Personalization Features for BNY Mellon

#### Defining the Problem
At BNY Mellon, our goal was to enhance user experience by adding new [personalization features](https://www.zendesk.com/blog/complete-guide-personalization/) to the client interface. The initial hypothesis was that users would benefit from the ability to customize their menus, allowing them to pin frequently used actions for easy access. We believed this would provide a more efficient and tailored experience, reducing the time it takes for users to complete tasks. As the problem became apparent certain subsets of users were having to bounce back and forth between repeated actions, and the user knew what information they needed, but there wasn't an easy path for them.

#### Research
We began by conducting user interviews and analyzing user behavior data to better understand how users navigated the existing interface. Through this research, we aimed to identify which personalization features would have the most impact. We looked at similar features in the market and considered how our users might differ in their needs due to the specific financial tasks they perform. We looked at other financial services as well as other platforms in media and productivity.

#### Ideation
Based on our research, we proposed two main ideas: a customizable menu and a list of recently used actions. The customizable menu would allow users to pin specific actions for quick access, while the recent items list would provide a history of recent actions.

#### Analysis & Planning
The research showed that while personalization options are valuable, many users prefer automated solutions that minimize the effort required to manage preferences. This led us to refine our idea: instead of a fully customizable menu, users needed something more automatic or specifically a list of recently used actions that would persist across sessions. Our planning pivoted from focusing solely on customization to creating a more intuitive, history-driven feature that could provide easy access to recent actions.

#### Design
Once we identified the core problem, we designed several prototypes, including the initial "pinned actions" menu concept and the alternative "recent items" list. We aimed to make both options user-friendly, with minimal clicks to access key features. The recent items list was designed to be persistent across sessions, so users could easily find their previous actions without manual input, and the pinned actions menu was designed to be persistent across sessions and accounts. This allowed a user to indicate to the system what actions they wanted to be available to them.

#### Prototyping
I helped lead the prototyping phase, where we developed multiple [design variations](https://uxdesign.cc/whats-next-on-figma-s-mind-redesigning-design-systems-0f287aaabc14) to test the best solution for our users. We used low-fidelity wireframes to visualize the different flows and progressively moved to high-fidelity interactive prototypes. These prototypes were integrated into Maze, [a tool we used to simulate the user experience and capture data](https://maze.co/blog/empathy-mapping/). With Maze, we could track user interactions and measure the effectiveness of each design option. Going into Figma and using our user personas, we set forth making the various paths.

#### Testing
We conducted A/B testing to compare the performance of the pinned actions menu versus the recent items list. Users were presented with a modal survey after completing their primary tasks, inviting them to participate in the study. The survey gathered free-text/mood feedback on usability, efficiency, and preferences. Maze allowed us to measure user interactions directly and analyze which design led to faster task completion.

The control for the test was the existing menu and how they got to actions their persona would use. The test was split into three groups:
- Group A: The existing menu, where users could navigate to actions using the menu.
- Group B: The recent items list, where users could access recent actions without navigating through menus.
- Group C: The recent items list, but not their recent items as they were on a shared account. This was done to see if a user would understand how those items got there and if they could reliably find their actions.

#### Results & Launch
The results from the A/B testing indicated that users overwhelmingly preferred the recent items list over the customizable pinned menu. Based on these findings, we integrated the recent items list feature into the BNY Mellon platform. It was initially rolled out to a subset of users for final validation before a broader launch.

#### Iteration
After launch, we continued to gather feedback and monitor user interactions to refine the feature. While the initial version met user needs, subsequent iterations improved the design based on real-world usage. We added options to filter or clear recent actions and further optimized the space where the list was displayed to ensure it was always easily accessible without cluttering the interface.

We also found that certain personas were viewing reports the most often, as the ability to include different asset classes and accounts we pulled some of the reporting data visualizations into the main dashboard. We then determined that making this feature a setting for child users that would still show movement on the accounts they could view.

#### Conclusion
The personalization feature for BNY Mellon was a success, with the recent items list becoming a core part of the platform. The user-centered design approach, combined with iterative testing and analysis, led to a feature that improved user experience and efficiency. The component was then codified into a design system component and used across the platform.

#### Key Takeaways
While the featuring process didn't initially intend to create automation features, it showed how and iterative process can lead to a more intuitive and user-friendly solution. The feature was not initially developed with true automation as it used rather simple logic loops, it was expanded to use a ["Weighted Random" algorithm](https://dev.to/jacktt/understanding-the-weighted-random-algorithm-581p) to determine which actions to display based on user behavior. And as you'd expect this logic could be further expanded and applied to other features.

#### Future Considerations
This feature is an example of a philosophy of design that I've come to appreciate that combines a feature's usability with ways of testing built in. It provided ways for account administrators to set up the feature for their users and then monitor the usage of the account thereby providing data to the administrators to see what was being used and how it was being used. This can be historically be tough to test for such a seemingly small feature; the use of cookies and session data to track user behavior ended being a simple way to reproduce settings and see how they were being used.


---
###### References
- [Personalization in UX Design: A Comprehensive Guide](https://www.uxpin.com/studio/blog/personalization-ux-design-comprehensive-guide/)
- ["Weighted Random" algorithm](https://dev.to/jacktt/understanding-the-weighted-random-algorithm-581p)
- [Maze - Empathy Mapping](https://maze.co/blog/empathy-mapping/)
- [Zendesk - Personalization](https://www.zendesk.com/blog/complete-guide-personalization/)

###### Tags
#ux #design #research #design-system #design-thinking #design-research #prototyping #user-research #user-experience #user-interface #user-centered-design #heuristics #usability #product-design #product-development #product-management #product-strategy #automation #personalization #user-experience-design #user-experience-research #iteration #user-persona #case-study #financial-services #banking-and-finance 
