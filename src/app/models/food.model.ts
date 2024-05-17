export interface Food {
  code: string
  product: Product
  status: number
  status_verbose: string
}

export interface Product {
  _id: string
  _keywords: string[]
  added_countries_tags: any[]
  additives_debug_tags: any[]
  additives_old_tags: any[]
  additives_original_tags: any[]
  additives_prev_original_tags: any[]
  additives_tags: any[]
  allergens: string
  allergens_from_ingredients: string
  allergens_from_user: string
  allergens_hierarchy: any[]
  allergens_tags: any[]
  amino_acids_prev_tags: any[]
  amino_acids_tags: any[]
  brands: string
  brands_debug_tags: any[]
  brands_tags: string[]
  categories: string
  categories_hierarchy: string[]
  categories_lc: string
  categories_old: string
  categories_properties: CategoriesProperties
  categories_properties_tags: string[]
  categories_tags: string[]
  category_properties: CategoryProperties
  checkers_tags: any[]
  ciqual_food_name_tags: string[]
  code: string
  codes_tags: string[]
  compared_to_category: string
  complete: number
  completeness: number
  correctors_tags: string[]
  countries: string
  countries_debug_tags: any[]
  countries_hierarchy: string[]
  countries_lc: string
  countries_tags: string[]
  created_t: number
  creator: string
  data_quality_bugs_tags: any[]
  data_quality_errors_tags: any[]
  data_quality_info_tags: string[]
  data_quality_tags: string[]
  data_quality_warnings_tags: string[]
  data_sources: string
  data_sources_tags: string[]
  ecoscore_data: EcoscoreData
  ecoscore_grade: string
  ecoscore_tags: string[]
  editors_tags: string[]
  entry_dates_tags: string[]
  food_groups: string
  food_groups_tags: string[]
  id: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  image_ingredients_small_url: string
  image_ingredients_thumb_url: string
  image_ingredients_url: string
  image_small_url: string
  image_thumb_url: string
  image_url: string
  images: Images
  informers_tags: string[]
  ingredients_debug: any[]
  ingredients_from_palm_oil_tags: any[]
  ingredients_ids_debug: any[]
  ingredients_that_may_be_from_palm_oil_tags: any[]
  interface_version_created: string
  interface_version_modified: string
  lang: string
  languages: Languages
  languages_codes: LanguagesCodes
  languages_hierarchy: string[]
  languages_tags: string[]
  last_edit_dates_tags: string[]
  last_image_dates_tags: string[]
  last_image_t: number
  last_modified_t: number
  last_updated_t: number
  lc: string
  main_countries_tags: any[]
  max_imgid: string
  minerals_prev_tags: any[]
  minerals_tags: any[]
  misc_tags: string[]
  no_nutrition_data: string
  nova_group: number
  nova_group_debug: string
  nova_groups: string
  nova_groups_markers: NovaGroupsMarkers
  nova_groups_tags: string[]
  nucleotides_prev_tags: any[]
  nucleotides_tags: any[]
  nutrient_levels: NutrientLevels
  nutrient_levels_tags: any[]
  nutriments: Nutriments
  nutriscore: Nutriscore
  nutriscore_2021_tags: string[]
  nutriscore_2023_tags: string[]
  nutriscore_data: NutriscoreData
  nutriscore_grade: string
  nutriscore_score: number
  nutriscore_score_opposite: number
  nutriscore_tags: string[]
  nutriscore_version: string
  nutrition_data_per: string
  nutrition_data_prepared_per: string
  nutrition_grade_fr: string
  nutrition_grades: string
  nutrition_grades_tags: string[]
  nutrition_score_beverage: number
  nutrition_score_debug: string
  nutrition_score_warning_no_fruits_vegetables_nuts: number
  other_nutritional_substances_tags: any[]
  packaging_materials_tags: any[]
  packaging_recycling_tags: any[]
  packaging_shapes_tags: any[]
  packagings: any[]
  packagings_materials: PackagingsMaterials
  photographers_tags: string[]
  pnns_groups_1: string
  pnns_groups_1_tags: string[]
  pnns_groups_2: string
  pnns_groups_2_tags: string[]
  popularity_key: number
  popularity_tags: string[]
  product_name: string
  product_name_fr: string
  product_quantity: string
  quantity: string
  quantity_debug_tags: any[]
  removed_countries_tags: any[]
  rev: number
  scans_n: number
  selected_images: SelectedImages
  sortkey: number
  states: string
  states_hierarchy: string[]
  states_tags: string[]
  traces: string
  traces_from_ingredients: string
  traces_from_user: string
  traces_hierarchy: any[]
  traces_tags: any[]
  unique_scans_n: number
  unknown_nutrients_tags: any[]
  update_key: string
  vitamins_prev_tags: any[]
  vitamins_tags: any[]
}

export interface CategoriesProperties {
  "agribalyse_food_code:en": string
  "agribalyse_proxy_food_code:en": string
  "ciqual_food_code:en": string
}

export interface CategoryProperties {
  "ciqual_food_name:en": string
  "ciqual_food_name:fr": string
}

export interface EcoscoreData {
  adjustments: Adjustments
  ecoscore_not_applicable_for_category: string
  missing: Missing
  missing_key_data: number
  scores: Scores
  status: string
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients
  packaging: Packaging
  production_system: ProductionSystem
  threatened_species: ThreatenedSpecies
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[]
  epi_score: number
  epi_value: number
  origins_from_categories: string[]
  origins_from_origins_field: string[]
  transportation_score: number
  transportation_scores: TransportationScores
  transportation_value: number
  transportation_values: TransportationValues
  value: number
  values: Values
  warning: string
}

export interface AggregatedOrigin {
  epi_score: string
  origin: string
  percent: number
  transportation_score: any
}

export interface TransportationScores {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface TransportationValues {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Values {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number
  value: number
  warning: string
}

export interface ProductionSystem {
  labels: any[]
  value: number
  warning: string
}

export interface ThreatenedSpecies {
  warning: string
}

export interface Missing {
  ingredients: number
  labels: number
  origins: number
  packagings: number
}

export interface Scores {}

export interface Images {
  "1": N1
  "2": N2
  "3": N3
  "4": N4
  "5": N5
  "6": N6
  front_fr: FrontFr
  ingredients_fr: IngredientsFr
}

export interface N1 {
  sizes: Sizes
  uploaded_t: number
  uploader: string
}

export interface Sizes {
  "100": N100
  "400": N400
  full: Full
}

export interface N100 {
  h: number
  w: number
}

export interface N400 {
  h: number
  w: number
}

export interface Full {
  h: number
  w: number
}

export interface N2 {
  sizes: Sizes2
  uploaded_t: number
  uploader: string
}

export interface Sizes2 {
  "100": N1002
  "400": N4002
  full: Full2
}

export interface N1002 {
  h: number
  w: number
}

export interface N4002 {
  h: number
  w: number
}

export interface Full2 {
  h: number
  w: number
}

export interface N3 {
  sizes: Sizes3
  uploaded_t: number
  uploader: string
}

export interface Sizes3 {
  "100": N1003
  "400": N4003
  full: Full3
}

export interface N1003 {
  h: number
  w: number
}

export interface N4003 {
  h: number
  w: number
}

export interface Full3 {
  h: number
  w: number
}

export interface N4 {
  sizes: Sizes4
  uploaded_t: number
  uploader: string
}

export interface Sizes4 {
  "100": N1004
  "400": N4004
  full: Full4
}

export interface N1004 {
  h: number
  w: number
}

export interface N4004 {
  h: number
  w: number
}

export interface Full4 {
  h: number
  w: number
}

export interface N5 {
  sizes: Sizes5
  uploaded_t: number
  uploader: string
}

export interface Sizes5 {
  "100": N1005
  "400": N4005
  full: Full5
}

export interface N1005 {
  h: number
  w: number
}

export interface N4005 {
  h: number
  w: number
}

export interface Full5 {
  h: number
  w: number
}

export interface N6 {
  sizes: Sizes6
  uploaded_t: number
  uploader: string
}

export interface Sizes6 {
  "100": N1006
  "400": N4006
  full: Full6
}

export interface N1006 {
  h: number
  w: number
}

export interface N4006 {
  h: number
  w: number
}

export interface Full6 {
  h: number
  w: number
}

export interface FrontFr {
  angle: number
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes7
  white_magic: any
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes7 {
  "100": N1007
  "200": N200
  "400": N4007
  full: Full7
}

export interface N1007 {
  h: number
  w: number
}

export interface N200 {
  h: number
  w: number
}

export interface N4007 {
  h: number
  w: number
}

export interface Full7 {
  h: number
  w: number
}

export interface IngredientsFr {
  angle: number
  coordinates_image_size: string
  geometry: string
  imgid: string
  normalize: any
  rev: string
  sizes: Sizes8
  white_magic: any
  x1: string
  x2: string
  y1: string
  y2: string
}

export interface Sizes8 {
  "100": N1008
  "200": N2002
  "400": N4008
  full: Full8
}

export interface N1008 {
  h: number
  w: number
}

export interface N2002 {
  h: number
  w: number
}

export interface N4008 {
  h: number
  w: number
}

export interface Full8 {
  h: number
  w: number
}

export interface Languages {
  "en:french": number
}

export interface LanguagesCodes {
  fr: number
}

export interface NovaGroupsMarkers {}

export interface NutrientLevels {}

export interface Nutriments {
  "nova-group": number
  "nova-group_100g": number
  "nova-group_serving": number
  "nutrition-score-fr": number
  "nutrition-score-fr_100g": number
}

export interface Nutriscore {
  "2021": N2021
  "2023": N2023
}

export interface N2021 {
  category_available: number
  data: Data
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data {
  energy: any
  energy_points: number
  energy_value: number
  fiber: number
  fiber_points: number
  fiber_value: number
  fruits_vegetables_nuts_colza_walnut_olive_oils: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
  is_beverage: number
  is_cheese: number
  is_fat: number
  is_water: string
  negative_points: number
  positive_points: number
  proteins: any
  proteins_points: number
  proteins_value: number
  saturated_fat: any
  saturated_fat_points: number
  saturated_fat_value: number
  sodium: any
  sodium_points: number
  sodium_value: number
  sugars: any
  sugars_points: number
  sugars_value: number
}

export interface N2023 {
  category_available: number
  data: Data2
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data2 {
  components: Components
  count_proteins: number
  count_proteins_reason: string
  is_beverage: number
  is_cheese: number
  is_fat_oil_nuts_seeds: number
  is_red_meat_product: number
  is_water: string
  negative_points: number
  negative_points_max: number
  non_nutritive_sweeteners_max: number
  positive_nutrients: string[]
  positive_points: number
  positive_points_max: number
}

export interface Components {
  negative: Negative[]
  positive: Positive[]
}

export interface Negative {
  id: string
  points: number
  points_max: any
  unit?: string
  value: number
}

export interface Positive {
  id: string
  points: number
  points_max?: number
  unit: string
  value: number
}

export interface NutriscoreData {
  energy: any
  energy_points: number
  energy_value: number
  fiber: number
  fiber_points: number
  fiber_value: number
  fruits_vegetables_nuts_colza_walnut_olive_oils: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
  grade: string
  is_beverage: number
  is_cheese: number
  is_fat: number
  is_water: string
  negative_points: number
  positive_points: number
  proteins: any
  proteins_points: number
  proteins_value: number
  saturated_fat: any
  saturated_fat_points: number
  saturated_fat_value: number
  score: number
  sodium: any
  sodium_points: number
  sodium_value: number
  sugars: any
  sugars_points: number
  sugars_value: number
}

export interface PackagingsMaterials {}

export interface SelectedImages {
  front: Front
  ingredients: Ingredients
}

export interface Front {
  display: Display
  small: Small
  thumb: Thumb
}

export interface Display {
  fr: string
}

export interface Small {
  fr: string
}

export interface Thumb {
  fr: string
}

export interface Ingredients {
  display: Display2
  small: Small2
  thumb: Thumb2
}

export interface Display2 {
  fr: string
}

export interface Small2 {
  fr: string
}

export interface Thumb2 {
  fr: string
}
