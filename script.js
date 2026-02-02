const PASSWORD = "koko_only";

const messages = {
  1: "Hey Koko,\n\nSome friendships don’t arrive loudly.\nThey don’t demand attention or announce themselves.\nThey just slowly grow — quietly, comfortably.\n\nThat’s how you became important to me.\n\nWith you, I never felt the need to pretend or explain too much.\nI could just be myself.\nAnd that kind of friendship is rare.\n\nI’m really grateful that you’re my bestie.",

  2: "Koko, I want you to know this clearly.\n\nI appreciate you — not just for what you do,\nbut for who you are.\n\nYour patience.\nYour kindness.\nThe way you understand things without making a big deal out of them.\n\nYou have this quiet strength that makes me feel comfortable around you.\nAnd I hope you never underestimate how special that is.",

  3: "koko,\n\nThere’s something about you that brings calm.\n\nEven on days when thoughts feel heavy or things don’t make sense,\ntalking to you feels like taking a deep breath.\n\nYou don’t rush.\nYou don’t judge.\nYou just stay.\n\nAnd sometimes, that’s the greatest comfort that i need.\n\nYou’re a safe place, Koko.\nI hope you always remember that.",

  4: "Trust doesn’t come easily.\nBut with you, it happened naturally.\n\nI trust you with my thoughts,\nmy moods,\nand even the things I don’t always say out loud.\n\nI know I can be honest with you.\nI know I don’t have to explain everything.\n\nThat level of trust means a lot to me.\nAnd I’m really thankful it’s with you.",

  5: "I’m grateful for the little moments.\n\nFor random conversations.\nFor shared laughs.\nFor those simple talks that somehow make the day better.\n\nLife doesn’t always have to be exciting to be meaningful.\nSometimes, it’s just about having the right person to talk to.\n\nAnd I’m thankful that person is you, Koko.",

  6: "You care in very quiet ways.\n\nIn checking in.\nIn remembering small things.\nIn being there without being asked.\n\nI hope you know how deeply that care is felt.\n\nAnd I hope life gives you back the same warmth you give to others.\nYou deserve gentle days and peaceful nights.",

  7: "No matter where life takes us,\nor how things change,\nI’ll always wish the best for you.\n\nHappiness.\nPeace.\nCalm days.\n\nThis little website is just a reminder —\nthat you matter,\nthat you are appreciated,\nand that your presence makes a difference.\n\nAlways here,\nAlways wishing you well,\nKoko."
};

function unlock() {
  const input = document.getElementById("password").value;

  if (input === PASSWORD) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("content").style.display = "block";

    const music = document.getElementById("bg-music");
    music.volume = 0.4;
    music.play().catch(() => {});
  } else {
    alert("Wrong password 🖤");
  }
}

function showDay(day) {
  const box = document.getElementById("message-box");
  box.innerHTML = "";

  const text = messages[day];
  let i = 0;

  const typing = setInterval(() => {
    box.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 28);
}
