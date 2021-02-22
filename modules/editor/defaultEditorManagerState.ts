import type { SnapshotIn } from "mobx-state-tree"
import type { EditorManager } from "./EditorManager"

export const DEFAULT_EDITOR_MANAGER_STATE: SnapshotIn<typeof EditorManager> = {
  messages: [
    {
      content:
        "Hey, welcome to Boopie's Embed maker! The easiest way to build and send embeds to Boopie!.\n\nThe embeds below explain a bit more, but you're not required to read them. If you're ready, click on the \"Clear All\" button in the editor to start making your own messages.\n\nBoopie has [a support server](https://discord.gg/FAtJTcNsvT)! Feel free to join and ask any questions you may have, or suggest things you'd like to see in the bot.\n\nYou can invite Boopie by [Clicking here](https://discord.com/oauth2/authorize?client_id=754356511613911051&scope=bot&permissions=2147483638)\n_ _",
      embeds: [
        {
          title: "What's this?",
          description:
            'Boopie is a discord bot to cover all your needs! It can control your whole server singlehandedly! This is an embed make for the bot to make things a little bit easier! You can make embeds here and copy the JSON! After copying the JSON you can run `[p]embed fromdata <your_json>` to make that embed! The `[p]` refers to the prefix which is `-` by default unless u changed. This is a modified version of [Discohook](https://discohook.org/) made for boopie!',
          color: {
            hue: 205.14970059880238,
            saturation: 0.6549019607843137,
            value: 1,
          },
        },
        {
          title: "Boopie",
          description:
            "As mentioned above boopie can do anything you need! it has moderation, automod, leveling, games and even fun with more than 100 image generation commands! Below are **SOME** features of Boopie.",
          color: {
            hue: 205.14970059880238,
            saturation: 0.6549019607843137,
            value: 1,
          },
          fields: [
            {
              name: "Automod",
              value:
                "Boopie has a really good auto-mod system that can protect your community from harmful DDoSers or hackers! You only need to setup some configurations! Or you can even make your own auto-mod! We got you covered!",
            },
            {
              name: "Listen to music while chilling!",
              value:
                "With Boopie's high quality music system no one can stop you from vibing with the Beats! With it's equalizer you can create your own music filters without using predefined settings that limit your pleasure!",
            },
            {
              name: "Head out on an adventure!",
              value:
                "Head out on an epic RPG adventure! Choose your own fate and fight the dark forces! Choose your future! Boopie got everything you need! :)",
            },
          ],
        },
      ],
    },
  ],
}
