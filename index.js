const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");

const bot = new Telegraf("7488158255:AAHblSmJm7AMzEIkw0JBWc2Yeh24WIpJqkc");
let time = 3;
bot.on("message", async (ctx) => {
  console.log(ctx.chat.id);
  if (ctx.message.text) {
    if (
      ctx.message.text.toLowerCase().includes("salom") ||
      ctx.message.text.toLowerCase().includes("assolom alekum") ||
      ctx.message.text.toLowerCase().includes("assolomu alekum") ||
      ctx.message.text.toLowerCase().includes("assolomu aleykum") ||
      ctx.message.text.toLowerCase().includes("assolomu alaykum")
    ) {
      try {
        await ctx.reply("Assolumu alaykum yaxshimisiz 😊", {
          reply_to_message_id: ctx.message.message_id,
        });
      } catch (e) {
        console.log(e);
      }
    } else if (
      ctx.message.text.toLowerCase().includes("notcoin sotaman") ||
      ctx.message.text.toLowerCase().includes("notkoin sotaman") ||
      ctx.message.text.toLowerCase().includes("notkoyn sotaman") ||
      ctx.message.text.toLowerCase().includes("notcoin sotiladi") ||
      ctx.message.text.toLowerCase().includes("notkoin sotiladi") ||
      ctx.message.text.toLowerCase().includes("notkoyn sotiladi")
    ) {
      try {
        await ctx.reply(
          `Agarda notcoin sotmoqchi bo'lsangiz @Kriptavalyuta_admin ga murojaat qiling. 
  Qimmat narxda sotib oladi va 100% ishonchli ✅ `,
          {
            reply_to_message_id: ctx.message.message_id,
          }
        );
      } catch (e) {
        console.log(e);
      }
    } else if (ctx.message.text.toLowerCase().includes("admin")) {
      try {
        await ctx.reply(`Admin: @Kriptavalyuta_admin ✅`, {
          reply_to_message_id: ctx.message.message_id,
          reply_markup: {
            inline_keyboard: [
              [{ text: "Admin", url: "https://t.me/kriptavalyuta_admin" }],
            ],
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
});
setInterval(async () => {
  const chatId = "-1001948659067";
  try {
    await bot.telegram.sendMessage(
      chatId,
      `<b>Hurmatli guruh a'zolari !</b> 👋

Kimda kim notcoin sotmoqchi bo'lsa ishonchli sotib berish hizmati mavjud.
  
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
  
Murojaat: @Kriptavalyuta_admin ✅`,
      {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Savdo qilish 💸",
                url: "https://t.me/kriptavalyuta_admin",
              },
            ],
          ],
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
}, time * 60 * 1000);
bot.command("time", (ctx) => {
  if (ctx.chat.id == "841886966") {
    const timeMsg = ctx.message.text.split(" ")[1];
    time = timeMsg;
    ctx.reply("Tayyor ✅");
  }
});
bot.launch();
