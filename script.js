const conversations = [
  {
    name: "UZUMAKI NARUTO",
    text: "Hei, Sasuke, Hinata! Kalian tahu nggak, tadi aku hampir telat ke pertemuan tim. Tebak kenapa?",
    audio: "audio/naruto1.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Karena kamu terlalu banyak makan ramen lagi?",
    audio: "audio/Sasuke.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Hah, enggak! Tapi itu ide bagus juga. Aku ketiduran karena semalam mimpi jadi Hokage lagi!",
    audio: "audio/naruto2.mp3",
    character: "character-container-1",
  },
  {
    name: "HINATA HYUGA",
    text: "Naruto-kun, itu mimpi yang bagus... Tapi, mungkin kamu harus lebih banyak istirahat, ya?",
    audio: "audio/hinata1.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Terima kasih, Hinata! Tapi kalau aku istirahat terus, kapan aku bisa melampaui Hokage sebelumnya?",
    audio: "audio/naruto3.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Kalau kamu nggak disiplin, mimpi itu cuma akan tetap jadi mimpi, Naruto.",
    audio: "audio/Sasuke1.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Hah, Sasuke, kamu selalu serius. Hidup itu harus dinikmati juga, tahu!",
    audio: "audio/naruto4.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Dan kamu terlalu santai. Balasannya nanti kau sendiri yang repot.",
    audio: "audio/Sasuke2.mp3",
    character: "character-container-2",
  },
  {
    name: "HINATA HYUGA",
    text: "Umm, Naruto-kun, Sasuke-kun ada benarnya. Tapi mungkin ada cara menyeimbangkan keduanya?",
    audio: "audio/hinata2.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Benar juga, Hinata. Kamu selalu tahu cara menenangkan suasana!",
    audio: "audio/naruto5.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Dia memang lebih dewasa daripada kamu, Naruto.",
    audio: "audio/Sasuke3.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Hah, jangan mulai, Sasuke! Kita di sini untuk kerja tim, bukan adu pendapat!",
    audio: "audio/naruto6.mp3",
    character: "character-container-1",
  },
  {
    name: "HINATA HYUGA",
    text: "I-itu benar. Kita harus mendukung satu sama lain, kan?",
    audio: "audio/hinata3.mp3",
    character: "character-container-3",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Kalau Naruto bisa lebih serius, mungkin dukungan itu akan lebih terasa.",
    audio: "audio/sasuke4.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Oke, oke, aku akan lebih serius! Tapi setelah kita makan ramen, ya?",
    audio: "audio/naruto7.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Kenapa selalu ramen?",
    audio: "audio/sasuke5.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Karena itu makanan para ninja sejati! Hinata, kamu setuju, kan?",
    audio: "audio/naruto8.mp3",
    character: "character-container-1",
  },
  {
    name: "HINATA HYUGA",
    text: "Eh, u-um… kalau Naruto-kun yang bilang begitu...",
    audio: "audio/hinata4.mp3",
    character: "character-container-3",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Hinata, kamu terlalu baik padanya.",
    audio: "audio/sasuke6.mp3",
    character: "character-container-2",
  },
  {
    name: "HINATA HYUGA",
    text: "Aku hanya ingin mendukung Naruto-kun...",
    audio: "audio/hinata5.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Lihat, Sasuke, Hinata selalu di pihakku! Itulah yang namanya teman sejati!",
    audio: "audio/naruto9.mp3",
    character: "character-container-1",
  },
  {
    name: "SAKURA HARUNO",
    text: "Naruto, jangan terlalu percaya diri. Kalau kamu nggak berlatih, bagaimana bisa jadi Hokage?",
    audio: "audio/sakura1.mp3",
    character: "character-container-4",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Terserah. Ayo berlatih sebelum kau tertidur lagi.",
    audio: "audio/sasuke7.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Eh, tunggu sebentar! Kita benar-benar latihan sekarang? Aku pikir kita istirahat dulu...",
    audio: "audio/naruto10.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Kau ini benar-benar... Hinata, ayo kita mulai tanpa dia.",
    audio: "audio/sasuke8.mp3",
    character: "character-container-2",
  },
  {
    name: "HINATA HYUGA",
    text: "Oh, baik... Naruto-kun, jangan lama-lama, ya!",
    audio: "audio/hinata6.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Oke, oke! Aku siap! Tapi setelah ini ramen, ya?",
    audio: "audio/naruto11.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Naruto, kalau latihanmu lemah lagi, aku nggak akan membiarkanmu makan ramen selama seminggu.",
    audio: "audio/sasuke9.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Apa?! Itu kejam, Sasuke! Hinata, bantu aku bicara dengan dia!",
    audio: "audio/naruto12.mp3",
    character: "character-container-1",
  },
  {
    name: "HINATA HYUGA",
    text: "Eh, Sasuke-kun, mungkin... umm, jangan terlalu keras pada Naruto-kun?",
    audio: "audio/hinata7.mp3",
    character: "character-container-3",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Hah, baiklah. Tapi dia harus membuktikan kalau dia bisa fokus.",
    audio: "audio/sasuke10.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Aku akan membuktikan itu! Aku akan menjadi yang terbaik di latihan ini!",
    audio: "audio/naruto13.mp3",
    character: "character-container-1",
  },
  {
    name: "HINATA HYUGA",
    text: "Naruto-kun, semangat, ya!",
    audio: "audio/hinata8.mp3",
    character: "character-container-3",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Aku akan memegang kata-katamu itu, Naruto.",
    audio: "audio/sasuke11.mp3",
    character: "character-container-2",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Oh, aku siap, Sasuke! Aku pasti menang kali ini!",
    audio: "audio/naruto14.mp3",
    character: "character-container-1",
  },
  {
    name: "SAKURA HARUNO",
    text: "Jangan terlalu overconfidence, Naruto. Kita lihat saja nanti!",
    audio: "audio/sakura2.mp3",
    character: "character-container-4",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Kita lihat saja nanti. Jangan hanya bicara besar.",
    audio: "audio/sasuke12.mp3",
    character: "character-container-2",
  },
  {
    name: "HINATA HYUGA",
    text: "Eh, ayo kita mulai saja. Jangan bertengkar dulu...",
    audio: "audio/hinata9.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Oke, Hinata. Tapi Sasuke harus tahu, aku nggak akan kalah!",
    audio: "audio/naruto15.mp3",
    character: "character-container-1",
  },
  {
    name: "UCHIHA SASUKE",
    text: "Aku sudah muak mendengar itu.",
    audio: "audio/sasuke13.mp3",
    character: "character-container-2",
  },
  {
    name: "HINATA HYUGA",
    text: "Umm, bisakah kita fokus saja?",
    audio: "audio/hinata10.mp3",
    character: "character-container-3",
  },
  {
    name: "UZUMAKI NARUTO",
    text: "Iya, iya, ayo mulai! Setelah ini ramen!",
    audio: "audio/naruto16.mp3",
    character: "character-container-1",
  },
];
let currentIndex = 0;
let currentAudio = null;
let autoNextTimeout = null;

const intro = document.getElementById("intro");
const startButton = document.getElementById("start-button");
const dialogueContainer = document.getElementById("dialogue-container");
const nameElement = document.getElementById("name");
const dialogueElement = document.getElementById("dialogue");
const nextButton = document.getElementById("next-button");

const characterContainers = {
  "character-container-1": document.getElementById("character-container-1"),
  "character-container-2": document.getElementById("character-container-2"),
  "character-container-3": document.getElementById("character-container-3"),
  "character-container-4": document.getElementById("character-container-4"),
};

// Function to add color based on character name
function setCharacterNameColor(characterName) {
  nameElement.className = ""; // Remove any previous class
  if (characterName === "UZUMAKI NARUTO") {
    nameElement.classList.add("naruto");
  } else if (characterName === "UCHIHA SASUKE") {
    nameElement.classList.add("sasuke");
  } else if (characterName === "HINATA HYUGA") {
    nameElement.classList.add("hinata");
  } else if (characterName === "SAKURA HARUNO") {
    nameElement.classList.add("sakura");
  }
}

function playDialogue(index) {
  const { name, text, audio, character } = conversations[index];

  // Stop any previously playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Hide all characters initially
  Object.values(characterContainers).forEach((container) => {
    container.style.display = "none";
  });

  // Show the character speaking
  const currentCharacter = characterContainers[character];
  currentCharacter.style.display = "block";

  // Set character name color dynamically
  setCharacterNameColor(name);

  nameElement.textContent = name;
  dialogueElement.textContent = text;

  // Play the audio for this dialogue
  currentAudio = new Audio(audio);
  currentAudio.play();
}

function autoNextDialogue() {
  if (currentIndex < conversations.length - 1) {
    currentIndex++;
    playDialogue(currentIndex);
    autoNextTimeout = setTimeout(autoNextDialogue, 20000); // Wait for 20 seconds before auto-next
  } else {
    alert("Percakapan Tim 7 selesai, Terima Kasih");
  }
}

nextButton.addEventListener("click", () => {
  if (currentIndex < conversations.length - 1) {
    clearTimeout(autoNextTimeout); // Stop any previous auto-next
    currentIndex++;
    playDialogue(currentIndex);
    autoNextTimeout = setTimeout(autoNextDialogue, 20000); // Restart the timeout for the next dialogue
  } else {
    alert("Percakapan Tim 7 selesai, Terima Kasih");
  }
});

startButton.addEventListener("click", () => {
  intro.style.display = "none";
  dialogueContainer.style.display = "block";
  playDialogue(currentIndex);
  autoNextTimeout = setTimeout(autoNextDialogue, 20000); // Start the auto-next after 20 seconds
});

// Play background music
const audio = document.getElementById("background-music");
audio.volume = 0.2;

document.getElementById("start-button").addEventListener("click", function () {
  const audio = document.getElementById("background-music");
  audio.play();
});
