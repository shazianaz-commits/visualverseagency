const drive = (id) => `https://drive.google.com/file/d/${id}/view`;
const thumb = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w900`;
const drivePreview = (id) => `https://drive.google.com/file/d/${id}/preview`;
const instagramEmbed = (shortcode) => `https://www.instagram.com/reel/${shortcode}/embed`;
const logoImage = "https://drive.google.com/thumbnail?id=1Z9dTeBxsduclwG4fuHuPX7trILAD01CI&sz=w900";

const portfolioItems = [
  { title: "The Last Reserve", category: "AI Documentaries", type: "AI Documentary", url: drive("1NLWqV7fKN4449-NmM6KVp0DZhxmbljnR"), image: thumb("1NLWqV7fKN4449-NmM6KVp0DZhxmbljnR"), desc: "Long-form AI documentary project with cinematic storytelling." },
  { title: "Hezbollah - AI Documentary", category: "AI Documentaries", type: "AI Documentary", url: drive("1xOWi_CZJ2luEVCU7Np8JqXA5c_-SU3Mr"), image: thumb("1xOWi_CZJ2luEVCU7Np8JqXA5c_-SU3Mr"), desc: "Hezbollah AI documentary project with an embedded Drive preview." },
  { title: "Sense and Sensibility", category: "AI Documentaries", type: "Literary Adaptation", url: drive("1B1UnAXpef4wJlbsyjFcP0eVbnZHiGbtY"), image: thumb("1B1UnAXpef4wJlbsyjFcP0eVbnZHiGbtY"), desc: "AI literary adaptation based on a classic story world." },

  { title: "Chinese Language Educational Video", category: "Language Video", type: "Educational Video", url: drive("1D9xxe2hl7xOVN4snVM6NPwmqd3RQXAu4"), image: thumb("1D9xxe2hl7xOVN4snVM6NPwmqd3RQXAu4"), desc: "Chinese language learning video for educational audiences." },

  { title: "After Shocks Of Love", category: "Creative Writing", type: "English Poetry", url: drive("1qp91laASC4pX89yRYYiBvEP6idoHvtnM"), image: thumb("1qp91laASC4pX89yRYYiBvEP6idoHvtnM"), desc: "English poetry collection entry." },
  { title: "At The Sea Shore", category: "Creative Writing", type: "English Poetry", url: drive("1O-BW-p0BvBCuB0sCdXJnwMXb3u29pzDt"), image: thumb("1O-BW-p0BvBCuB0sCdXJnwMXb3u29pzDt"), desc: "English poem with reflective visual presentation." },
  { title: "His Glance", category: "Creative Writing", type: "English Poetry", url: drive("1J5inSwtCbn-hwT-XNXEnV2gi5-xgQrq4"), image: thumb("1J5inSwtCbn-hwT-XNXEnV2gi5-xgQrq4"), desc: "English poetry portfolio piece." },
  { title: "The Dream", category: "Creative Writing", type: "English Poetry", url: drive("1IYkX-vghBIgT_LP1U2N2efvocbmJorMG"), image: thumb("1IYkX-vghBIgT_LP1U2N2efvocbmJorMG"), desc: "English poem shaped around imagination and emotion." },
  { title: "If Both Are Ready", category: "Creative Writing", type: "English Poetry", url: drive("1cQBNnPUrWSKAOVFyP6SoD7lNwpB8actm"), image: thumb("1cQBNnPUrWSKAOVFyP6SoD7lNwpB8actm"), desc: "English romantic poetry portfolio piece." },
  { title: "راہِ جنوں", category: "Creative Writing", type: "Urdu Poetry", url: drive("1G4EmZsd8VlxicdA3goGZsGeTjikb43cD"), image: thumb("1G4EmZsd8VlxicdA3goGZsGeTjikb43cD"), desc: "Urdu poetry collection entry." },
  { title: "کلی کا سفر", category: "Creative Writing", type: "Urdu Poetry", url: drive("1Xn8YnTa1T6qgEvywFXhiN13Byosd-Dz6"), image: thumb("1Xn8YnTa1T6qgEvywFXhiN13Byosd-Dz6"), desc: "Urdu poetry with literary presentation." },
  { title: "میں خواب ہو جاؤں", category: "Creative Writing", type: "Urdu Poetry", url: drive("1RUT8G3_Lr7w_ZEhToUfaOpol5Dte5EqV"), image: thumb("1RUT8G3_Lr7w_ZEhToUfaOpol5Dte5EqV"), desc: "Urdu poem from the creative writing collection." },
  { title: "وارثِ محبت", category: "Creative Writing", type: "Urdu Poetry", url: drive("1XKMZFLJE0pctRUJtFX3JPklG-jYBszPh"), image: thumb("1XKMZFLJE0pctRUJtFX3JPklG-jYBszPh"), desc: "Urdu poetry portfolio piece." },

  { title: "Logo Design Concept 01", category: "Logo Design", type: "Logo Concept", url: drive("1g4MwFHm37gU0orB06o-RY3ziGG45_mII"), image: thumb("1g4MwFHm37gU0orB06o-RY3ziGG45_mII"), desc: "Logo design concept for identity exploration." },
  { title: "Logo Design Concept 02", category: "Logo Design", type: "Logo Concept", url: drive("195nqaUSSvfRX27Z7fLxCU3nuXzOiJFnG"), image: thumb("195nqaUSSvfRX27Z7fLxCU3nuXzOiJFnG"), desc: "Second visual identity concept." },
  { title: "Logo Design Concept 03", category: "Logo Design", type: "Logo Concept", url: drive("1u30qGh--D15zv0k0Su0BFNwuvxUwuFu0"), image: thumb("1u30qGh--D15zv0k0Su0BFNwuvxUwuFu0"), desc: "Logo concept with brand-focused composition." },
  { title: "Logo Design Concept 04", category: "Logo Design", type: "Logo Concept", url: drive("16goMwzOYhTjx7Axr-aM76m1vP7OWLdly"), image: thumb("16goMwzOYhTjx7Axr-aM76m1vP7OWLdly"), desc: "Fourth logo design exploration." },
  { title: "Logo Design Concept 05", category: "Logo Design", type: "Logo Concept", url: drive("1XuFtm27m4UNLUYDjMao0_rxFZAjFBFtA"), image: thumb("1XuFtm27m4UNLUYDjMao0_rxFZAjFBFtA"), desc: "Fifth logo design portfolio concept." },

  { title: "AI Tutorial Video 01", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/r0LnqQmOqOM?si=O0Fr7H3Pjo8uCxwq", image: "https://img.youtube.com/vi/r0LnqQmOqOM/hqdefault.jpg", desc: "AI tutorial video from the educational series." },
  { title: "AI Tutorial Video 02", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/gpmIVAWNk80?si=PNTj1tPStd8ljZ1K", image: "https://img.youtube.com/vi/gpmIVAWNk80/hqdefault.jpg", desc: "Second AI tutorial video." },
  { title: "AI Tutorial Video 03", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/EUbPEv_Mgug?si=2SMsMeeAVmftiUoG", image: "https://img.youtube.com/vi/EUbPEv_Mgug/hqdefault.jpg", desc: "Third AI tutorial lesson." },
  { title: "AI Tutorial Video 04", category: "Educational Content", type: "AI Tutorial", url: "https://youtu.be/JyWOXoma88E?si=hTHHaD2VlESPLNdL", image: "https://img.youtube.com/vi/JyWOXoma88E/hqdefault.jpg", desc: "Fourth AI tutorial video." },
  { title: "Kids Tutorial Video", category: "Educational Content", type: "Kids Education", url: drive("1aJQk9We5LeL5Jo4ewL6pFkjHWyehxhPp"), image: thumb("1aJQk9We5LeL5Jo4ewL6pFkjHWyehxhPp"), desc: "Kids educational tutorial video." },

  { title: "UGC Advertisement Video 01", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTkV2bJDGoY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "UGC-style advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 02", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTkUSIPDPCR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "Second UGC advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 03", category: "UGC Ads", type: "Instagram Reel", url: "https://www.instagram.com/reel/DTcpOR8jGbF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", desc: "Third UGC advertisement reel embedded from Instagram." },
  { title: "UGC Advertisement Video 04", category: "UGC Ads", type: "Video Ad", url: drive("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), image: thumb("1HDq02CpRV3PlKtVpmEJ-49A4QOtFkL46"), desc: "UGC advertisement video hosted on Drive." },

  { title: "Custom Video Editing Project", category: "Client Projects", type: "Video Editing", url: drive("1T7sRgnnvJ2F-hyKmwd6ukKUDCYUtPBSs"), image: thumb("1T7sRgnnvJ2F-hyKmwd6ukKUDCYUtPBSs"), desc: "Client video editing project showcase." },

  ...Array.from({ length: 10 }, (_, index) => {
    const ids = ["1aUpksYDA4xDBA3LH5m1ptnyj640nVO1T", "13f7qTqMoQAnDv_W8T2khzLWNleLeM3_U", "18eJLUTCfm3LJ1ervlZ2zBcBvvOzDivtA", "1_hRO9_ZsrfE1YAUuDaV_d5omwsrFkAG5", "1NJ9YvV4MB2R9cKS32PTZ4XIkFif6uCUN", "1icr8v29OQOY-AT2Ui_ZBUy6KmDMw_BKI", "1ZIgJLfPIy0PM9YCUYn67U4JDymMdldMk", "1Af8FUJNJkWUXDPec3gCC-ZYtIrx2FNS3", "1mUoSRG_r31MyI0hsk1qkin3n67qOZxZB", "19d6HU1yARV7c7nrRmbpijYvlGQTOgEXF"][index];
    const number = String(index + 1).padStart(2, "0");
    return { title: `Vocabulary Lesson ${number}`, category: "Vocabulary Series", type: "Educational Video", url: drive(ids), image: thumb(ids), desc: "Purrfect Whisker Words vocabulary lesson." };
  }),

  ...[
    ["Verbal IQ Type 01 - Number Series", "1RP30QPzTzy4M-HenXXQGV99qolZvw9D1"],
    ["Verbal IQ Type 02 - Word Analogies Overview", "1MtGB_CYcBpq7UJ_-JXiW0z4-x3Oe3gKv"],
    ["Verbal IQ Type 03 - Letter Series", "1hAgI9nusHvS6jDOD_fFqmPb3DxFYzP8T"],
    ["Verbal IQ Type 04 - Logical Reasoning & Comparisons Mastery", "121J_LlC5R4hGzItOnpjkVrKVQwmO1Q1C"],
    ["Verbal IQ Type 05 - Arithmetic & Rates MCQ Practice Set", "12RuGNUJGGIGVmM1YWsX38P8uGscdWNjD"],
    ["Verbal IQ Type 06 - Classification (Odd One Out)", "1VtBtmOKTV7cpXZmO6ioljetN3XIaeGjD"],
    ["Verbal IQ Type 07 - Word Rearrangement & Scrambles", "13wwNrf76ntbjkg-z9r_S-aZDrpTDYSLH"],
    ["Verbal IQ Type 08 - Coding and Decoding", "14l_uvU_O8BGBcUhuRCPfgRb6JnMqdSVX"],
    ["Verbal IQ Type 09 - Statement Based Questions", "1DnvjU4TU9wuc9b3H3L-I4z86NgCB_uPl"],
    ["Verbal IQ Type 10 - Blood Relations", "153Fi9GR_TXuD4q1H6Bse_2k_p3UN-yJf"],
    ["Verbal IQ Type 11 - Direction Sense", "1ldFSaXcKL56JWmlolIxdEmVoiuUB9JFi"],
  ].map(([title, id]) => ({ title, category: "PDF Library", type: "Research PDF", url: drive(id), image: thumb(id), desc: "Research-based verbal IQ learning resource." })),

  ...Array.from({ length: 5 }, (_, index) => {
    const ids = ["1GDby3H3ngNuyS9aVco9Q1ZswJCL0LMbP", "1VJ1HKi5f-O_Bje6oDZ6k0WPwCqvRUKJD", "1_D9kBZWak2btt0PVkAJI3vjyilUTfWgE", "1tGSdLvCXXjxyBn3j4DwWMrajfToa1P82", "1-woPHTkXxV-piMdjqbk6Cg2CqMOoBKaD"][index];
    const number = String(index + 1).padStart(2, "0");
    return { title: `Thumbnail Design ${number}`, category: "Thumbnails", type: "YouTube Thumbnail", url: drive(ids), image: thumb(ids), desc: "YouTube thumbnail design portfolio piece." };
  }),

  ...Array.from({ length: 4 }, (_, index) => {
    const ids = ["1GpwQEKYsu4OnZbbJ6WvoLBfhajkdswfE", "18XFn9OlJ7oVv6YJNJm7WYtUeaCApcbGR", "1gBHr_psOZih7ofrl_7qEr8aXW3jc-5Bi", "1LclGM7kk1DbWtoOpsJXrvqCZjLndorK1"][index];
    const number = String(index + 1).padStart(2, "0");
    return { title: `Before & After Editing Transformation ${number}`, category: "Video Editing", type: "Editing Showcase", url: drive(ids), image: thumb(ids), desc: "Before-and-after video editing transformation." };
  }),

  ...[
    ["Anna Got Betrayed", ["13VPPMxOB4XB0lGSKQOQCtBx06nSoaVQX", "1sAkGKn2eRygMdwETZS1Q0Mb7JSZHT9S3", "1rinaVgKJFn71SB_UrSW-QkglOQAIVjOz", "1QRCx79LVWSoi5jaOlu-zx31Enq_ZWor3", "15xXsCPcs0t-M1x_m0A6WtU-vzLqxTkYR", "1bFNQHeNYcD1QANKXxMyPncQFQPGgrdzS"]],
    ["Don Quixote", ["1zKaxExaTpxDvCRuqE9TX7gm1awpOJBPG", "131JQ_UKswmet34cX54xcGX27PVySM3Fd", "1hh__GkbzD968MEVDX2ERCAfU9r2XXlL4", "1nfkCSwQAphH2wQLxxW--oRF9I_Sk6XDQ", "18JQFjCcOrLiEKgeL9nbd_rfDu3zyp6ad", "1LMzwMb2iSYnrwM0Y2SXEa3_Skz0JgAZZ"]],
    ["Sherlock Holmes", ["1wYCFVB_m28-d8OzBtuv8NO3D6w93T7Mr", "109CJ5r8BAyD_VXKXDGTDr02JXzNmHZBZ", "13cw2dOLFPqcsLrqj7bR-YZ8iDk-G36Ia", "1P1yVxV_FRs9mmPVtSCglOh3DlgSxy6uz", "1qE9sARPOlz2FVuzw11Ll57rj6Dn7MydL", "1Ern7UBBYnxBttvFrys5IcHAJ8LJtaOkG"]],
    ["The Count of Monte Cristo", ["1Qdds8gLAjboARPouPC59cMzH7BcOgpJL", "1Ee5D45HlAdQMhDllszEVSGIZsy4Vw9zM", "1hZK-tdPq2eIihrBp2qBCZB_bY2LE6p62", "17o919r7RoLSVb7DB0Eff4lKKqM_i6LK_", "1b7nscZreTG4Uzo7JujB1O5JJb_L07_jZ", "1eB404XNFAp6pFkyEWgZpKUW5WvLBEYoz"]],
    ["The Iliad", ["1PtPE2x9bVwOrwvvIONNMazyO2ltXYler", "1gxxR7rBktUvKSRy3cdPV4h6hO8G_HLFO", "1eTHkkjowZJymo8DhvXi9jbR58GGhF8C0", "1jMrt1MpVuQD7-u-nKmKClVvFDTtBLUQR", "1uQP4gh3wF1Bq30akvVZUDZpvc1w6h26a", "1-p4U2mdOI4gwosT7R9GUWiW3JrZQtqxc"]],
    ["The Odyssey", ["14dyTtH5J_ZeVz2C26zZtWu12Z8eG0c3Z", "1ndgDDnAVa0a19U7UWRTyvo50-vH4OqWY", "1VjRPbP2Q0Ezo3-EDG3xdwRmLJqvICGI3", "1n1DAnZVcBlbTSwjSeKhGuc-J2a3xM6LN", "1-AGr2VaO_G-abBdkhUGHzFm6WW44jUQb", "1xpEMYxUhs31lLvl85nUuKoRhPjq-aAVE"]],
    ["Hezbollah", ["1xpEMYxUhs31lLvl85nUuKoRhPjq-aAVE", "1aa_OmH4BHiGksuz93pOzg70vq4QPGv6a", "1AWPicgcmekOanS53NpjCaQeS_Z8AdWke", "1oQrSW_U35F3wCxbI4LS4MB7OWQpTN_mB", "1ZCmhH7ynrWpKXrMCDrr7-9Q4VvDrONAx", "12GEcxNsI2RC4ryGANn0bzedSjHpdk4a7"]],
    ["The Last Reserve", ["1Gug2yS20jtfGJ8mYT1rZrAwE6gwy3uzm", "1FvAqpMTYfz0Es-D9EjUYuiR8VFPLcDeU", "1lW_OihuGqgEYb5dWsQMRqUtkpYeG7xqX", "1rv1GtEj2Tg4ligz73uc6J1QyON82k0FD", "189QiiDArxseL0FTV_cW_lslbpf-ObHD2", "1BrLHij2-z9MiAM4ZwYo8JW9gtQrFrsYp"]],
  ].flatMap(([series, ids]) => ids.map((id, index) => ({
    title: `${series} - Episode ${String(index + 1).padStart(2, "0")}`,
    category: "AI Shorts",
    type: `${series} Series`,
    url: drive(id),
    image: thumb(id),
    desc: "AI short-form episode from a serialized storytelling project.",
  }))),
];

const socialLinks = [
  ["YouTube", "YT", "Channel", "https://www.youtube.com/@visual_verse_agency"],
  ["Instagram", "IG", "Reels and posts", "https://www.instagram.com/visual_verse_agency/"],
  ["Threads", "TH", "Social profile", "https://www.threads.com/@visual_verse_agency"],
  ["Facebook", "FB", "Agency profile", "https://www.facebook.com/profile.php?id=61590101997513"],
  ["X", "X", "Updates", "https://x.com/Visual_Verse"],
  ["LinkedIn", "IN", "Professional profile", "https://www.linkedin.com/in/shazia-naz-25a519411/"],
  ["Bluesky", "BS", "Social profile", "https://bsky.app/profile/visualverseagency.bsky.social"],
  ["Pinterest", "PI", "Visual boards", "https://pin.it/47fnpD5mU"],
  ["TikTok", "TT", "Short-form content", "https://www.tiktok.com/@visual_verse_agency?lang=en"],
  ["Fiverr Pro", "FP", "Freelance services", "https://pro.fiverr.com/sellers/visualverse_0/edit"],
  ["Upwork", "UW", "Freelance profile", "https://upwork.com/freelancers/~0177a3cb88ee5b25d9"],
];

const previewableItems = portfolioItems.filter((item) => canPreview(item));

let activeCategory = "All";

const portfolioGrid = document.querySelector("#portfolioGrid");
const filterRow = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#portfolioSearch");
const projectCount = document.querySelector("#projectCount");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const landingIntro = document.querySelector("#landingIntro");
const introSkip = document.querySelector("#introSkip");
const portfolioMarquee = document.querySelector("#portfolioMarquee");

function renderFilters() {
  const categories = ["All", ...new Set(previewableItems.map((item) => item.category))];
  filterRow.innerHTML = categories
    .map((category) => `<button type="button" class="${category === activeCategory ? "active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderPortfolio() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = previewableItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const text = `${item.title} ${item.category} ${item.type} ${item.desc}`.toLowerCase();
    return matchesCategory && text.includes(query);
  });

  if (activeCategory === "AI Shorts") {
    renderShortSections(filtered);
    return;
  }

  portfolioGrid.innerHTML = filtered
    .map((item, index) => `
      <article class="portfolio-card" style="animation-delay: ${Math.min(index, 11) * 0.05}s">
        ${renderMedia(item)}
        <div class="card-body">
          <div class="card-meta">
            <span class="pill">${item.category}</span>
            <span class="pill">${item.type}</span>
          </div>
          <h3 class="${getTitleClass(item)}">${item.title}</h3>
          <p>${item.desc}</p>
          <a class="card-link" href="${item.url}" target="_blank" rel="noopener">View Project</a>
        </div>
      </article>
    `)
    .join("");
}

function renderShortSections(items) {
  const grouped = items.reduce((series, item) => {
    const seriesName = item.type.replace(" Series", "");
    if (!series[seriesName]) series[seriesName] = [];
    series[seriesName].push(item);
    return series;
  }, {});

  portfolioGrid.innerHTML = `
    <div class="shorts-accordion">
      ${Object.entries(grouped)
        .map(([seriesName, episodes], index) => `
          <article class="shorts-series ${index === 0 ? "open" : ""}">
            <button class="series-toggle" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
              <span>${seriesName}</span>
              <small>${episodes.length} episodes</small>
            </button>
            <div class="series-panel">
              ${episodes
                .map((item, itemIndex) => `
                  <article class="portfolio-card" style="animation-delay: ${Math.min(itemIndex, 5) * 0.05}s">
                    ${renderMedia(item)}
                    <div class="card-body">
                      <div class="card-meta">
                        <span class="pill">${item.category}</span>
                        <span class="pill">${item.type}</span>
                      </div>
                      <h3 class="${getTitleClass(item)}">${item.title}</h3>
                      <p>${item.desc}</p>
                      <a class="card-link" href="${item.url}" target="_blank" rel="noopener">View Episode</a>
                    </div>
                  </article>
                `)
                .join("")}
            </div>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function renderMarquee() {
  const featured = previewableItems
    .filter((item) => item.image)
    .filter((item) => ["Logo Design", "Thumbnails", "AI Shorts", "Video Editing", "Educational Content", "UGC Ads"].includes(item.category))
    .slice(0, 18);
  const marqueeItems = [...featured, ...featured]
    .map((item) => `
      <a class="marquee-item" href="${item.url}" target="_blank" rel="noopener">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span>${item.title}</span>
      </a>
    `)
    .join("");

  portfolioMarquee.innerHTML = `<div class="marquee-track">${marqueeItems}</div>`;
}

function renderIntroPreviewWall() {
  const introItems = previewableItems
    .filter((item) => item.image)
    .filter((item) => ["Logo Design", "Thumbnails", "Creative Writing", "AI Documentaries", "Educational Content", "Video Editing", "UGC Ads"].includes(item.category))
    .slice(0, 18);

  document.querySelector("#introPreviewWall").innerHTML = introItems
    .map((item, index) => `
      <span class="intro-preview-tile" style="--delay: ${index * 0.06}s; --tile-aspect: ${getAspect(item)}">
        <img src="${item.image}" alt="" loading="lazy" />
      </span>
    `)
    .join("");
}

function canPreview(item) {
  return Boolean(item.image || getDriveId(item.url) || getYouTubeId(item.url) || getInstagramShortcode(item.url));
}

function getDriveId(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? match[1] : "";
}

function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
}

function getInstagramShortcode(url) {
  const match = url.match(/instagram\.com\/reel\/([^/?#]+)/);
  return match ? match[1] : "";
}

function getAspect(item) {
  if (item.category === "AI Shorts") return "9 / 16";
  if (item.type === "Instagram Reel") return "9 / 16";
  if (item.category === "Logo Design" || item.title.includes("Display Picture")) return "1 / 1";
  if (item.category === "PDF Library" || item.category === "Creative Writing") return "4 / 3";
  if (item.category === "Thumbnails") return "16 / 9";
  if (item.type.includes("Tutorial") || item.type.includes("Video") || item.type.includes("Documentary")) return "16 / 9";
  return "16 / 10";
}

function shouldEmbed(item) {
  return [
    "AI Documentaries",
    "Language Video",
    "Educational Content",
    "UGC Ads",
    "Client Projects",
    "Vocabulary Series",
    "PDF Library",
    "Creative Writing",
    "Video Editing",
    "AI Shorts",
  ].includes(item.category);
}

function renderMedia(item) {
  const aspect = getAspect(item);
  const youtubeId = getYouTubeId(item.url);
  const driveId = getDriveId(item.url);
  const instagramShortcode = getInstagramShortcode(item.url);

  if (youtubeId) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="https://www.youtube.com/embed/${youtubeId}" title="${item.title}" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `;
  }

  if (driveId && shouldEmbed(item)) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="${drivePreview(driveId)}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    `;
  }

  if (instagramShortcode) {
    return `
      <div class="card-media media-embed" style="--aspect: ${aspect}">
        <iframe src="${instagramEmbed(instagramShortcode)}" title="${item.title}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    `;
  }

  return `
    <a class="card-media" style="--aspect: ${aspect}" href="${item.url}" target="_blank" rel="noopener" aria-label="Open ${item.title}">
      <img src="${item.image}" alt="${item.title}" loading="lazy" />
    </a>
  `;
}

function getTitleClass(item) {
  return item.type === "Urdu Poetry" ? "urdu-title" : "";
}

function renderSocials() {
  document.querySelector("#socialGrid").innerHTML = socialLinks
    .map(([name, icon, label, url]) => `
      <a class="social-card" href="${url}" target="_blank" rel="noopener">
        <span class="social-icon" aria-hidden="true">${icon}</span>
        <strong>${name}</strong>
        <small>${label}</small>
      </a>
    `)
    .join("");
}

filterRow.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  renderPortfolio();
});

portfolioGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".series-toggle");
  if (!button) return;
  const series = button.closest(".shorts-series");
  const isOpen = series.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
});

searchInput.addEventListener("input", renderPortfolio);

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("open", !expanded);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

function closeIntro() {
  landingIntro.classList.add("hide");
  document.body.classList.remove("intro-active");
}

introSkip.addEventListener("click", closeIntro);
window.addEventListener("load", () => {
  window.setTimeout(closeIntro, 4300);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = [
    "Hello Visual Verse Agency,",
    "",
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Project Type: ${formData.get("project_type")}`,
    "",
    `Message: ${formData.get("message")}`,
  ].join("\n");

  formNote.textContent = "Opening WhatsApp with your inquiry...";
  window.open(`https://wa.me/923088846208?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

projectCount.textContent = `${previewableItems.length}+`;
renderFilters();
renderIntroPreviewWall();
renderMarquee();
renderPortfolio();
renderSocials();
