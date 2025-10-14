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

---

### Privacy Agreement

BNY Mellon and its affiliates are committed to protecting the privacy and security of user data. All research, testing, and data collection conducted as part of the personalization feature project adhered to BNY Mellon's strict privacy standards and policies.

During user testing, all participants' data was anonymized, and no personally identifiable information (PII) was collected without explicit consent. The feedback and behavioral data gathered for this project were used solely for the purpose of improving the user experience on BNY Mellon’s platforms.

Data collected from Maze and other research tools was stored securely and was only accessible to authorized personnel directly involved in the project. Any information shared was strictly governed by BNY Mellon's internal data security policies to ensure the highest levels of confidentiality.

By participating in any user research, users consented to the use of anonymized data for product and service improvement purposes. BNY Mellon does not share user data with third parties for commercial purposes and complies with all applicable data protection regulations, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).

For more information about BNY Mellon's privacy policies, please visit [BNY Mellon's Privacy Policy Page](https://www.bnymellon.com/us/en/privacy-policy.html).

### Privacy & Intellectual Property
In addition to BNY Mellon’s privacy and data protection practices, I would like to clarify that this case study is presented purely to discuss design theory, process, and outcomes. The specific details shared here focus on user experience research, design philosophy, and general approaches to solving usability challenges.
I am not sharing any proprietary or confidential information related to BNY Mellon's internal operations, systems, or intellectual property. This document avoids disclosing any sensitive data, trade secrets, or code used in the project. The case study is meant to highlight general UX methodologies and my involvement in the design process rather than any protected or technical aspects of the solution.
All insights and observations discussed herein are drawn from high-level design concepts that are widely applicable to user-centered design practices and are not intended to disclose any specific strategies or technical implementations unique to BNY Mellon.

---

Joel Dombek © X.X.MMXXV 

---

10-16-2024 Hannah meeting

Still resolving some build issues I was having with my site
I have 2 other case studies in the works was focusing on site link issues

