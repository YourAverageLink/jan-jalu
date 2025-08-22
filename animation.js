document.addEventListener("DOMContentLoaded", () => {
  const about = document.getElementById("about");
  const body = document.getElementById("prose-body");
  const words = ["toki!", "mi", "jan", "Jalu"];
  const word_timeouts = [0, 500, 800, 1100];
  const sitelen_pona_to_words_time = 800;
  const fade_time = 250;
  const body_fade_time =
    sitelen_pona_to_words_time + word_timeouts[word_timeouts.length - 1];

  about.classList.remove("opacity-0", "translate-y-4");

  setTimeout(() => {
    words.forEach((word, index) => {
      setTimeout(() => {
        const span = document.getElementById(`word${index}`);
        // fade out image
        span.classList.add("opacity-0");

        setTimeout(() => {
          // then fade text in
          span.innerHTML = word;
          span.classList.remove("opacity-0");
        }, fade_time);
      }, word_timeouts[index]);
    });
  }, sitelen_pona_to_words_time);

  setTimeout(() => {
    body.classList.remove("opacity-0", "translate-y-4");
  }, body_fade_time);
});
