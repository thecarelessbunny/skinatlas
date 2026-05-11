import type { Condition } from './types';

// 10 conditions, chosen for the most striking visible difference between
// Fitzpatrick I–III and IV–VI presentations. Listed alphabetically.
export const conditions: Condition[] = [
  {
    slug: 'acne-vulgaris',
    name: 'Acne Vulgaris',
    aliases: ['Acne'],
    summary:
      'Pink inflammatory papules on lighter skin. In darker skin, post-inflammatory hyperpigmentation often dominates and long outlasts the acne itself.',
    description:
      'A chronic inflammatory disorder of the hair follicle and sebaceous gland, producing blackheads, whiteheads, papules, pustules, and sometimes deep cystic nodules. Driven by hormones, oil overproduction, follicular blockage, and bacterial colonization. Most common in adolescence but persists well into adulthood for many, particularly in women. It is the leading cause of post-inflammatory pigmentation in skin of color.',
  },
  {
    slug: 'atopic-dermatitis',
    name: 'Atopic Dermatitis',
    aliases: ['Eczema'],
    summary:
      'Erythematous on lighter skin. Often gray, violaceous, or hyperpigmented on darker skin.',
    description:
      'A chronic, intensely itchy inflammatory skin disease driven by a defective skin barrier and an overactive immune response. Often runs in families alongside asthma and seasonal allergies, as part of the "atopic march." Flares come and go throughout life and most commonly begin in childhood, though adult-onset is well recognized.',
  },
  {
    slug: 'basal-cell-carcinoma',
    name: 'Basal Cell Carcinoma',
    aliases: ['BCC'],
    summary:
      'Pearly pink papule with telangiectasias in lighter skin. In darker skin, often pigmented brown to black and easily mistaken for a mole or melanoma.',
    description:
      'The most common skin cancer in the world, arising from basal keratinocytes at the bottom of the epidermis. Driven primarily by cumulative UV damage. Almost always slow-growing and locally destructive rather than metastatic, but can cause significant disfigurement if neglected. In darker skin, more than half of cases are pigmented, which leads to delayed diagnosis when lesions are mistaken for moles or seborrheic keratoses.',
  },
  {
    slug: 'melanoma',
    name: 'Melanoma',
    summary:
      'Sun-exposed skin in lighter patients. Acral or subungual presentations in skin of color, where it is frequently diagnosed late.',
    description:
      'The most aggressive form of skin cancer, arising from melanocytes (the pigment-producing cells). Prognosis depends almost entirely on how early it is caught. Thin tumors have excellent survival, while deep ones often do not. UV exposure drives most cases in lighter skin, while darker-skinned patients more often develop melanoma on palms, soles, and under the nails.',
  },
  {
    slug: 'melasma',
    name: 'Melasma',
    summary:
      'A predominantly skin-of-color condition. Far more common and severe in Fitzpatrick III–VI than in lighter skin.',
    description:
      'A chronic, often relapsing pigmentary disorder producing symmetric brown patches on sun-exposed facial skin. Strongly tied to hormones, especially pregnancy (where it is called the "mask of pregnancy") and oral contraceptives, along with UV exposure. Overwhelmingly affects women, particularly those of Hispanic, Asian, Middle Eastern, and African descent.',
  },
  {
    slug: 'psoriasis',
    name: 'Psoriasis',
    summary:
      'Salmon-pink plaques classically. Violaceous or hyperpigmented in skin of color, with persistent post-inflammatory pigment after clearance.',
    description:
      'A chronic, immune-mediated disease in which the immune system accelerates skin cell turnover, producing thick, well-demarcated, scaly plaques. Affects roughly two to three percent of people worldwide. Carries elevated risk of psoriatic arthritis, cardiovascular disease, depression, and metabolic syndrome. It is a systemic disease, not just a skin one.',
  },
  {
    slug: 'rosacea',
    name: 'Rosacea',
    summary:
      'The diagnostic erythema is dramatically harder to see in Fitzpatrick V–VI skin, where it often presents as a dusky or violaceous flush.',
    description:
      'A chronic inflammatory disorder of the central face producing persistent redness, flushing, visible small blood vessels, and sometimes inflammatory bumps and pustules. Commonly triggered or worsened by heat, alcohol, spicy foods, sun exposure, and emotional stress. Long mischaracterized as a disease of fair skin, but occurs across all populations.',
  },
  {
    slug: 'squamous-cell-carcinoma',
    name: 'Squamous Cell Carcinoma',
    aliases: ['SCC'],
    summary:
      'Sun-damaged skin in lighter patients. In darker skin, more often arises in chronic wounds, scars, and sites of long-standing inflammation.',
    description:
      'The second most common skin cancer overall, and the most common skin cancer in people with darker skin. In lighter-skinned patients it typically arises in sun-exposed areas as a hyperkeratotic, scaly, or ulcerated papule, often growing out of a precancerous actinic keratosis. In darker-skinned patients it more often develops in scars, chronic wounds, areas of long-standing inflammation, and on the lower limbs. It tends to be more aggressive and is diagnosed later in skin of color, contributing to higher mortality.',
  },
  {
    slug: 'tinea-versicolor',
    name: 'Tinea Versicolor',
    summary:
      'Hyperpigmented in lighter skin, hypopigmented in darker. Same disease, opposite color.',
    description:
      'A common superficial fungal infection caused by overgrowth of Malassezia yeasts that live as normal flora on everyone\'s skin. Produces oval patches with fine scale, typically on the trunk and shoulders. Heat, humidity, and sweat promote conversion of the yeast to its disease-causing form.',
  },
  {
    slug: 'vitiligo',
    name: 'Vitiligo',
    summary:
      'Subtle on light skin, dramatically high-contrast and visually defining on dark skin.',
    description:
      'An autoimmune condition in which the immune system destroys melanocytes (the cells that produce skin pigment), leaving sharply demarcated, chalk-white patches. Can be localized to a single body area or widespread and symmetric. Carries significant psychosocial impact, particularly in darker-skinned patients where the contrast is striking.',
  },
];

export const conditionsBySlug: Record<string, Condition> = Object.fromEntries(
  conditions.map((c) => [c.slug, c])
);
