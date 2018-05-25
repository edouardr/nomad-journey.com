import { AboutUsCleaner } from './about-us-cleaner'
import { ArticleCleaner } from './article-cleaner'
import { DestinationCleaner } from './destination-cleaner'
import { HomeCleaner } from './home-cleaner'
import { ItineraryCleaner } from './itinerary-cleaner'
import { LandingPageCleaner } from './landing-page-cleaner'
import { LocationCleaner } from './location-cleaner'
import { NavigationCleaner } from './navigation-cleaner'

export const cleaners = [
  new AboutUsCleaner(),
  new ArticleCleaner(),
  new DestinationCleaner(),
  new HomeCleaner(),
  new ItineraryCleaner(),
  new LandingPageCleaner(),
  new LocationCleaner(),
  new NavigationCleaner()
]

export const run = async (entry) => {
  const cleanersToRun = cleaners.filter((cleaner) => cleaner.isMatch(entry.type))

  for (let cleaner of cleanersToRun) {
    await cleaner.clean(entry)
  }
}
