# ICEarth Sovereign Publishing & Research Breakthrough Workflow

When featuring a new scientific study, environmental breakdown, or exposenomics research topic on ICEarth, follow this full-stack integration pattern:

1. **Analytical Component**: Create a dedicated interactive React component in `src/components/` (e.g., `PicaExposenomics.tsx`, `EvolutionaryCanaryProof.tsx`) containing:
   - Hero banner with source metadata and link to study/report.
   - Core metrics bar with high-impact key statistics.
   - Interactive data visualizations (Recharts) for regional prevalence, concentrations, or timelines.
   - High-resolution artwork view modal with cryptographic provenance hashes.
   - Cross-navigation buttons linking to related proof tabs and the main gallery.

2. **Visual Infographic & Gallery Archive**:
   - Generate high-quality visual infographic assets for the topic.
   - Register the photo asset in `basePhotographyGallery` (`NormRouletHome.tsx`) under a unique ID (e.g., `PHOTO-000E`) with location, vault hash, and tags.
   - Register the asset in `memberMediaIp` in `SovereignMembershipPortal.tsx` (e.g., `IP-000C`) with sovereign hash and launcher link.

3. **Newsfeed Article & Co-op Repository**:
   - Add a featured entry at the top of `DEFAULT_ARTICLES` in `ICEarthNewsRepository.tsx`.
   - Include `sourceUrl`, `sourceName`, `author`, `abstract`, `editorCommentary`, and `fullExcerpt`.
   - Map image thumbnail via helper resolver.
   - Add direct action button `"Launch [Topic] Engine"` in article card footer.

4. **Magazine Feed Integration**:
   - Add matching entry to `magazineArticles` in `NormRouletHome.tsx` for front-page magazine visibility.

5. **Sovereign Directory & Global App Navigation**:
   - Import the component in `App.tsx`.
   - Add navigation buttons in the Sovereign Directory sidebar menu, topbar, and mobile drawer.
   - Add the tab route in `App.tsx` main content render area.
