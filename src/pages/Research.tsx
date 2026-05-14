import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  X,
  Microscope,
  FlaskConical,
  Atom,
  Layers,
  Film,
  Box,
  BatteryCharging,
  Droplets,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface ResearchTheme {
  id: string;
  title: string;
  summary: string;
  description: React.ReactNode;
  image: string;
  applications: string[];
  trends: string;
  tags: string[];
  icon: React.ReactNode;
}

interface ActiveProject {
  title: string;
  funder: string;
  duration: string;
  pi: string;
  status: string;
}

const researchThemes: ResearchTheme[] = [
  {
    id: 'nanomaterials',
    title: '1D & 2D Nanomaterials',
    summary:
      'Low-dimensional nanomaterials spanning carbon nanotubes, nanowires, graphene, MXenes, and transition metal dichalcogenides exhibit extraordinary mechanical, electronic, and optical properties arising from quantum confinement and extreme surface-to-volume ratios.',
    description: (
      <>
        <p className="mb-4">
          <strong>One-dimensional nanomaterials</strong>, exemplified by carbon nanotubes (CNTs) and semiconductor nanowires, are characterized by nanoscale diameters (typically 0.5–100 nm) while extending to macroscopic lengths. Single-walled carbon nanotubes (SWCNTs) can be conceptualized as rolled graphene sheets, where the chirality vector dictates whether the tube behaves as a metallic conductor or a direct-bandgap semiconductor. These structures possess tensile strengths exceeding 100 GPa, thermal conductivities surpassing 3000 W·m⁻¹·K⁻¹, and current-carrying capacities orders of magnitude higher than copper.
        </p>
        <p className="mb-4">
          <strong>Two-dimensional nanomaterials</strong> constitute atomically thin crystalline sheets where electrons are confined to a single plane, yielding emergent phenomena distinct from their three-dimensional parents. Graphene, the archetypal 2D material, consists of a hexagonal lattice of sp²-hybridized carbon atoms with a thickness of merely 0.335 nm. Beyond graphene, the family includes hexagonal boron nitride (h-BN) and the so-called "post-graphene" materials such as silicene, germanene, and phosphorene.
        </p>
        <p>
          <strong>MXenes and transition metal dichalcogenides (TMDs)</strong> represent two of the most rapidly evolving classes of 2D materials. MXenes are synthesized by selectively etching the A-group element from MAX phases, yielding 2D transition metal carbides, nitrides, or carbonitrides. TMD monolayers such as MoS₂, WS₂, and WSe₂ transition from indirect-gap semiconductors in bulk to direct-gap semiconductors in monolayer form, enabling "valleytronics" and strong spin–orbit coupling effects.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80',
    applications: [
      'Graphene-based transparent conductive electrodes and ultrafast photodetectors',
      'MXene electrodes for supercapacitors with volumetric capacitances up to 1500 F·cm⁻³',
      'CNT-reinforced polymers for aerospace structural components',
      'Atomically thin membranes for ion-selective water purification',
      'TMD-based catalysts for the hydrogen evolution reaction (HER)',
    ],
    trends:
      'The field is advancing toward van der Waals heterostructures—artificially stacked layers of dissimilar 2D materials that enable designer band alignments. Twistronics, the study of moiré superlattices formed by twisting adjacent layers, has revealed unconventional superconductivity and correlated insulating states. Wafer-scale synthesis via CVD and MBE is rapidly closing the gap between laboratory curiosity and industrial integration.',
    tags: ['Graphene', 'MXenes', 'TMDs', 'CNTs', 'Quantum Confinement', 'Valleytronics'],
    icon: <Atom className="w-5 h-5" />,
  },
  {
    id: 'transition-metals',
    title: 'Transition Metals',
    summary:
      'Elements of the d-block characterized by partially filled d orbitals form the chemical foundation of modern materials technology through rich coordination chemistry, catalytic versatility, and tunable electronic and magnetic properties.',
    description: (
      <>
        <p className="mb-4">
          <strong>Electronic Structure and Fundamental Properties.</strong> Transition metals occupy groups 3 through 12 of the periodic table, with a general valence electron configuration of [noble gas](n–1)d¹⁻¹⁰ns⁰⁻². The presence of partially filled d orbitals gives rise to their signature properties: variable oxidation states, rich coordination chemistry, and distinctive optical and magnetic behavior. The relatively small energy differences between successive oxidation states facilitate facile electron transfer, making transition metals indispensable in redox catalysis.
        </p>
        <p className="mb-4">
          <strong>Catalysis: Homogeneous and Heterogeneous.</strong> Transition metals dominate both homogeneous and heterogeneous catalysis. Landmark industrial processes include the Monsanto and Cativa processes for acetic acid production; hydroformylation employing rhodium or cobalt carbonyls; and olefin metathesis, recognized with the 2005 Nobel Prize in Chemistry. The Haber–Bosch process for ammonia synthesis using iron catalysts and automotive catalytic converters employing platinum, palladium, and rhodium exemplify massive industrial deployment.
        </p>
        <p>
          <strong>Nanoscale Applications.</strong> At the nanoscale, transition metals manifest unique size-dependent properties. Gold nanoparticles exhibit surface plasmon resonance and catalytic activity absent in macroscopic gold. Transition metal oxides and chalcogenides at the nanoscale serve as active materials in lithium-ion batteries, supercapacitors, and photocatalysts. Coordination complexes such as cisplatin revolutionized cancer chemotherapy, while metalloenzymes demonstrate nature's mastery of transition metal chemistry in biological catalysis.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
    applications: [
      'Haber–Bosch ammonia synthesis and Fischer–Tropsch synthesis',
      'Platinum electrocatalysts for proton-exchange membrane fuel cells',
      'Transition metal oxide cathodes (LiCoO₂, NMC, NCA) for batteries',
      'Iron, cobalt, and nickel in magnetic storage and spintronic devices',
      'Platinum-based anticancer drugs and gadolinium MRI contrast agents',
    ],
    trends:
      'The convergence of transition metal chemistry with nanotechnology is driving innovation in single-atom catalysis, where isolated metal atoms on supports maximize atomic efficiency. Computational catalysis leveraging density functional theory (DFT) and machine learning now accelerates the discovery of new alloys for the oxygen reduction reaction (ORR) and CO₂ reduction. The global transition toward green hydrogen production relies heavily on earth-abundant transition metal catalysts to replace scarce platinum group metals in electrolyzers.',
    tags: ['Catalysis', 'Coordination Chemistry', 'Nanoparticles', 'Fuel Cells', 'Single-Atom Catalysis'],
    icon: <FlaskConical className="w-5 h-5" />,
  },
  {
    id: 'mofs',
    title: 'Metal-Organic Frameworks (MOFs)',
    summary:
      'Porous crystalline materials built from metal clusters and organic linkers, offering record-breaking surface areas and programmable pore environments. They are at the forefront of gas storage, catalysis, and molecular separations.',
    description: (
      <>
        <p className="mb-4">
          <strong>Metal–organic frameworks (MOFs)</strong> are a class of coordination polymers constructed from inorganic secondary building units (SBUs)—typically metal ions or polynuclear clusters—joined by rigid organic linkers via coordination bonds to form one-, two-, or three-dimensional crystalline lattices. The field of reticular chemistry enables precise architectural control over pore size, geometry, and chemical functionality by rational selection of nodes and linkers. This design flexibility has yielded more than 20,000 distinct MOF structures, many exhibiting permanent porosity with surface areas exceeding 7,000 m²/g—far surpassing traditional zeolites and activated carbons.
        </p>
        <p className="mb-4">
          The porosity of MOFs is not merely a passive attribute but an engineered feature governed by topology, aperture dimensions, and host–guest chemistry. The isoreticular principle permits systematic expansion of pore openings without altering the underlying network topology, producing mesoporous architectures capable of accommodating large molecular species. Gas storage applications rely on optimizing both gravimetric and volumetric capacity: hydrogen physisorption benefits from pore sizes of ~7 Å that enhance overlap of van der Waals potentials, while CO₂ capture relies on frameworks decorated with amine groups to increase the isosteric heat of adsorption.
        </p>
        <p>
          In catalysis, MOFs operate through diverse mechanisms: unsaturated metal nodes act as Lewis acid sites, organic linkers bearing active groups participate directly in bond-forming events, and encapsulated noble-metal nanoparticles are protected within pore channels against deactivation. Beyond traditional catalysis, MOFs have emerged as promising platforms for photocatalytic CO₂ reduction and water splitting, where semiconductor-like band gaps (1.0–5.5 eV) can be tuned via ligand conjugation.
        </p>
      </>
    ),
    image:
      'https://images.pexels.com/photos/32769363/pexels-photo-32769363.jpeg?auto=compress&cs=tinysrgb&w=800',
    applications: [
      'High-density physisorption of H₂, CH₄, and CO₂; separation of light hydrocarbons',
      'Amine-functionalized MOFs for post-combustion CO₂ capture and direct air capture',
      'Lewis acid catalysis, size-selective shape catalysis, and enantioselective synthesis',
      'Atmospheric water generators operating in arid climates (e.g., MOF-801, MOF-303)',
      'Adsorptive sequestration of PFAS, heavy metals, and pharmaceutical traces from wastewater',
    ],
    trends:
      'Commercialization is accelerating: BASF has scaled MOF production for industrial gas separation, and startups are deploying MOF-based atmospheric water harvesters in water-scarce regions. Emerging directions include MOF-derived single-atom catalysts, conductive 2D MOF nanosheets for electrocatalysis, and integrated MOF-CVD processes compatible with semiconductor cleanroom standards. Defect-engineered MOFs with expanded apertures are opening new frontiers in desalination and ion separation.',
    tags: ['Reticular Chemistry', 'Gas Storage', 'CO₂ Capture', 'Catalysis', 'Water Harvesting'],
    icon: <Box className="w-5 h-5" />,
  },
  {
    id: 'ldhs',
    title: 'Layered Double Hydroxides (LDHs)',
    summary:
      'A family of anionic clay-like materials composed of positively charged brucite-type metal hydroxide layers with exchangeable interlayer anions. Their structural versatility underpins applications in controlled drug release, catalysis, and environmental decontamination.',
    description: (
      <>
        <p className="mb-4">
          <strong>Layered double hydroxides (LDHs)</strong>, also known as hydrotalcite-like compounds or anionic clays, are a class of ionic solids characterized by a lamellar structure. The positively charged host layers are derived from brucite-like (M(OH)₂) sheets in which a fraction of divalent cations (Mg²⁺, Zn²⁺, Ni²⁺, Co²⁺, Fe²⁺) is isomorphously substituted by trivalent cations (Al³⁺, Cr³⁺, Fe³⁺), generating an excess positive charge that is compensated by anions intercalated in the gallery region along with variable amounts of water. Synthetic LDHs are readily prepared by co-precipitation at controlled pH, urea hydrolysis, or hydrothermal methods.
        </p>
        <p className="mb-4">
          A defining feature of LDHs is the facile, often reversible exchange of interlayer anions, which are weakly electrostatically bound compared to the covalent sheets. This anion exchange capacity enables the incorporation of a vast array of species—from simple inorganic anions (Cl⁻, NO₃⁻, CO₃²⁻) to complex organic anions, surfactants, and biomolecules such as DNA—making LDHs exceptionally versatile host materials. The exchange process frequently exhibits shape selectivity, which has practical significance in isolating specific isomers from crude oil residues for polymer production.
        </p>
        <p>
          In the biomedical sphere, LDHs have emerged as promising nanocarriers for controlled drug delivery. Anionic drug molecules can be intercalated directly into the gallery to form biohybrid nanocomposites. Release kinetics are governed by anion exchange with competing physiological anions and by pH-dependent dissolution of the host lattice in acidic endosomal compartments. Beyond biomedicine, NiFe- and CoAl-LDH nanosheets have demonstrated outstanding oxygen evolution reaction (OER) and hydrogen evolution reaction (HER) activity, positioning them as earth-abundant electrocatalysts for alkaline water splitting.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80',
    applications: [
      'Intercalation of anti-inflammatory, antibiotic, and anticancer agents for sustained release',
      'Shape-selective capture of aromatic dicarboxylate isomers and removal of anionic pollutants',
      'NiFe-LDH and CoAl-LDH nanoarrays as high-performance OER/HER electrocatalysts',
      'Adsorption of heavy metals (Ni²⁺, Pb²⁺), phosphate, arsenate from wastewater',
      'LDH-based conversion coatings that release corrosion-inhibiting anions on demand',
    ],
    trends:
      'Current research is heavily focused on ultrathin LDH nanosheets and heterostructures that maximize active edge-site exposure for electrocatalysis. The reconstruction of LDHs from derived mixed oxides under electrochemical operating conditions—known as the "self-reconstruction" phenomenon—has revealed dynamic, high-valent active sites that rival precious-metal catalysts. LDH-biochar and LDH-graphene oxide composites are gaining traction for synergistic pollutant removal, while LiAl-LDH composites are emerging for Li⁺ recovery from brines.',
    tags: ['Anionic Clays', 'Drug Delivery', 'Electrocatalysis', 'Anion Exchange', 'Water Splitting'],
    icon: <Layers className="w-5 h-5" />,
  },
  {
    id: 'thin-films',
    title: 'Thin Films',
    summary:
      'Engineered material layers ranging from monolayers to several micrometers, synthesized via controlled deposition processes such as CVD, PVD, and spin coating. They constitute the functional backbone of modern semiconductor devices and transparent oxide electronics.',
    description: (
      <>
        <p className="mb-4">
          <strong>Chemical vapor deposition (CVD)</strong> and <strong>physical vapor deposition (PVD)</strong> represent the two dominant families of thin-film synthesis. In CVD, volatile precursors undergo chemical reaction or decomposition on a heated substrate, producing conformal coatings with exceptional compositional control; variants such as low-pressure CVD (LPCVD), plasma-enhanced CVD (PECVD), and atomic layer deposition (ALD) enable processing from polycrystalline dielectrics to epitaxial semiconductors at reduced thermal budgets. PVD encompasses sputtering, thermal evaporation, and electron-beam evaporation, relying on vacuum-phase transport and condensation to yield dense, adherent films ideal for metallization and precision optical stacks.
        </p>
        <p className="mb-4">
          <strong>Semiconductor thin films</strong> lie at the heart of photovoltaic and thin-film transistor (TFT) technologies. Amorphous hydrogenated silicon (a-Si:H), polycrystalline silicon, and compound semiconductors such as cadmium telluride (CdTe), copper indium gallium selenide (CIGS), and gallium arsenide (GaAs) are deposited with bandgap and doping profiles tailored to specific device architectures. Direct-bandgap chalcogenides absorb photons efficiently across sub-micrometer thicknesses, while epitaxial growth strategies leverage lattice engineering to minimize misfit dislocations and tailor strain-dependent electronic properties.
        </p>
        <p>
          <strong>Oxide thin films</strong> and their device integration have catalyzed the rise of transparent electronics. Transparent conducting oxides (TCOs) such as indium tin oxide (ITO), fluorine-doped tin oxide (FTO), and aluminum-doped zinc oxide (AZO) simultaneously transmit visible light and transport charge, serving as front electrodes in solar cells, touchscreens, and OLEDs. Amorphous oxide semiconductors—most notably indium gallium zinc oxide (IGZO)—exhibit electron mobilities far exceeding those of a-Si, enabling high-resolution, low-power TFT backplanes for displays.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    applications: [
      'Microelectronics and flat-panel displays (TFT-LCD, AMOLED, IGZO backplanes)',
      'Thin-film photovoltaics (CdTe, CIGS, amorphous silicon, perovskite tandems)',
      'Transparent electrodes and window layers in optoelectronic devices',
      'Wear-resistant tribological coatings (TiN, DLC, CrN) for cutting tools',
      'MEMS, biosensors, plasmonic devices, and thin-film lithium-ion batteries',
    ],
    trends:
      'Perovskite and multi-junction thin-film solar cells have surpassed 30% power conversion efficiency in the lab, promising low-cost, lightweight energy generation. Flexible transparent electronics fabricated on polymer substrates are enabling foldable displays and wearable sensors. Atomic layer deposition is increasingly adopted in advanced semiconductor nodes for 3D conformal gate dielectrics. The field is pushing toward indium-free TCOs and the integration of 2D materials with conventional thin-film platforms to create hybrid van der Waals heterostructures.',
    tags: ['CVD', 'PVD', 'ALD', 'Transparent Electronics', 'Photovoltaics', 'IGZO'],
    icon: <Film className="w-5 h-5" />,
  },
  {
    id: 'polymer-composites',
    title: 'Polymer & Composite Materials',
    summary:
      'Advanced polymers and composite materials leverage molecular architecture and multi-phase structuring to deliver exceptional mechanical, thermal, and responsive behaviors for aerospace, automotive, and biomedical engineering.',
    description: (
      <>
        <p className="mb-4">
          <strong>Polymer nanocomposites (PNCs)</strong> are created by dispersing nanoscale fillers—such as layered silicates, carbon nanotubes, graphene, MXenes, or metal-oxide nanoparticles—within a polymer matrix. These nanoscale inclusions vastly increase the interfacial surface area relative to conventional micro-composites, leading to pronounced enhancements in stiffness, thermal stability, gas-barrier properties, and flame retardancy even at low loadings. Processing strategies include in-situ polymerization, melt extrusion for thermoplastic systems, and electrospinning, which produces aligned nanofiber mats with controlled porosity.
        </p>
        <p className="mb-4">
          <strong>Fiber-reinforced composites (FRCs)</strong> consist of high-strength fibers—carbon, glass, aramid, or natural cellulose—embedded within a thermoset or thermoplastic matrix. The composite's performance is governed by the fiber–matrix interphase: load is transferred from the matrix to the fibers via interfacial shear stresses, while the fibers provide tensile strength and stiffness according to the rule of mixtures. Because they offer superior specific strength and fatigue resistance compared to monolithic metals, FRCs are indispensable in primary aerospace structures, wind-turbine blades, and high-performance automotive body panels.
        </p>
        <p>
          <strong>Smart polymers</strong>, or stimuli-responsive polymers, undergo reversible conformational, solubility, or permeability changes in response to external triggers such as temperature, pH, ionic strength, light, electric or magnetic fields, and specific biomolecules. Temperature-responsive systems like poly(N-isopropylacrylamide) (PNIPAM) exhibit a lower critical solution temperature (LCST), precipitating above ~33 °C. Hydrogel networks of these polymers can swell or collapse to release drugs on demand, while shape-memory polymers recover permanent geometries from temporary shapes upon thermal or photochemical activation.
        </p>
      </>
    ),
    image:
      'https://images.pexels.com/photos/30360253/pexels-photo-30360253.jpeg?auto=compress&cs=tinysrgb&w=800',
    applications: [
      'Lightweight primary and secondary structures in aerospace and automotive engineering',
      'Wind-energy turbine blades and pressure vessels using carbon/glass fiber prepregs',
      'Biomedical scaffolds, orthopedic implants, and controlled drug-delivery vehicles',
      'High-performance "green" tire treads reinforced with silica nanocomposites',
      'Self-adaptive wound dressings, wearable health monitors, and soft robotic actuators',
    ],
    trends:
      'The development of bio-based, recyclable thermoset composites and covalent adaptable networks (vitrimers) is reshaping the lifecycle economics of FRCs, addressing end-of-life recyclability that has long plagued traditional epoxies. Four-dimensional (4D) printing now integrates shape-memory polymers and responsive hydrogels to create objects that transform over time under environmental stimuli. MXene- and graphene-reinforced polymers are opening pathways to lightweight electromagnetic-interference shielding and structural battery electrodes.',
    tags: ['Nanocomposites', 'Carbon Fiber', 'Smart Polymers', '4D Printing', 'Vitrimers'],
    icon: <Box className="w-5 h-5" />,
  },
  {
    id: 'energy-storage',
    title: 'Energy Storage Applications',
    summary:
      'Next-generation materials for electrochemical energy storage, spanning high-energy-density lithium-ion and sodium-ion batteries, safe solid-state electrolytes, and high-power supercapacitors optimized for real-world grid and mobility applications.',
    description: (
      <>
        <p className="mb-4">
          <strong>Rechargeable Batteries: Li-ion, Na-ion, and Solid-State Systems.</strong> Lithium-ion batteries (LIBs) remain the dominant electrochemical storage technology, relying on the reversible intercalation of Li⁺ ions into layered transition metal oxide cathodes (e.g., LiCoO₂, NMC, NCA, LiFePO₄) and graphite or silicon-based anodes. Over three decades, volumetric energy densities have increased threefold while costs dropped tenfold, enabling portable electronics, electric vehicles (EVs), and grid-scale storage. However, flammability of organic electrolytes, cobalt supply-chain constraints, and dendrite-related safety concerns have accelerated research into alternative chemistries.
        </p>
        <p className="mb-4">
          <strong>Sodium-ion batteries (SIBs)</strong> have emerged as a compelling complement to LIBs, leveraging earth-abundant sodium and aluminum current collectors to reduce cost and geopolitical supply risk. Because Na⁺ has a larger ionic radius (116 pm) than Li⁺ (90 pm), SIBs require distinct electrode materials: hard carbon anodes and cathodes such as layered transition metal oxides or Prussian blue analogues. Although gravimetric energy densities are lower, SIBs exhibit excellent rate capability, safety, and tolerance to low temperatures, making them attractive for stationary storage and short-range urban mobility.
        </p>
        <p>
          <strong>Supercapacitors and Hybrid Storage.</strong> Supercapacitors store energy via electrostatic double-layer capacitance (EDLC) at carbonaceous electrodes and/or electrochemical pseudocapacitance from fast surface redox reactions. Unlike batteries, they rely on ion adsorption rather than bulk phase transformation, enabling charge/discharge cycles exceeding 100,000 times with specific powers orders of magnitude higher than LIBs. Hybrid lithium-ion capacitors combine an EDLC anode with a battery-type cathode to bridge the energy–power gap, offering intermediate performance for regenerative braking and grid stabilization.
        </p>
      </>
    ),
    image:
      'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800&q=80',
    applications: [
      'High-Ni NMC and silicon-anode LIB packs for electric vehicle extended range',
      'Na-ion packs for low-cost urban transit and stationary grid storage',
      'Thin-film solid-state cells for pacemakers, RFID tags, and wearables',
      'Supercapacitors for crane regenerative braking and light-rail energy recovery',
      'Solid-state batteries for satellites and drones with wide temperature tolerance',
    ],
    trends:
      'Industry is transitioning to cobalt-free NMA and high-entropy oxide cathodes to decouple battery supply chains from conflict minerals. Silicon nanowire and lithium-metal anodes are entering pilot production, promising 30–50% energy density gains over graphite. Toyota, CATL, and QuantumScape target GWh-scale solid-state production by the late 2020s. CATL\'s Naxtra cells and Faradion\'s pouch designs are achieving 160+ Wh/kg with 10,000-cycle lifetimes, positioning SIBs as the chemistry of choice for stationary storage in developing economies.',
    tags: ['Li-ion', 'Na-ion', 'Solid-State', 'Supercapacitors', 'Grid Storage', 'EVs'],
    icon: <BatteryCharging className="w-5 h-5" />,
  },
  {
    id: 'wastewater',
    title: 'Wastewater Remediation',
    summary:
      'Advanced materials for multi-barrier water treatment, including high-surface-area adsorbents, visible-light photocatalysts, anti-fouling membranes, and functional nanomaterials targeting heavy metals, organic micropollutants, and pathogens.',
    description: (
      <>
        <p className="mb-4">
          <strong>Adsorption and Surface-Mediated Removal.</strong> Adsorption is a surface-driven separation process in which contaminants adhere to a solid adsorbent via physisorption (van der Waals forces) or chemisorption (covalent/electrostatic bonding). In wastewater treatment, activated carbon—derived from biomass, coal, or nutshell precursors—remains the most widely deployed adsorbent due to its tunable microporosity and high specific surface area (often 1,000–3,000 m²/g). Zeolites, silica gel, and metal–organic frameworks (MOFs) offer selective ion exchange for heavy metals such as Pb²⁺, Cd²⁺, and Cr(VI), while low-cost biochar and agricultural-waste-derived carbons are gaining traction for sustainable large-scale deployment.
        </p>
        <p className="mb-4">
          <strong>Photocatalysis and Advanced Oxidation.</strong> Photocatalysis harnesses semiconductor materials—most notably titanium dioxide (TiO₂) and zinc oxide (ZnO)—to generate electron–hole pairs upon ultraviolet or visible-light irradiation. These charge carriers produce highly reactive hydroxyl radicals and superoxide anions that non-selectively mineralize organic pollutants, including dyes, pesticides, and pharmaceutical residues, into CO₂, H₂O, and inorganic salts. To extend activity into the visible spectrum, researchers employ dopants, heterojunctions (anatase/rutile, Z-schemes), and alternative semiconductors such as graphitic carbon nitride (g-C₃N₄).
        </p>
        <p>
          <strong>Membrane Filtration and Nanomaterial-Enabled Treatment.</strong> Membrane technology physically separates contaminants according to pore size or solution-diffusion selectivity, spanning microfiltration (MF), ultrafiltration (UF), nanofiltration (NF), and reverse osmosis (RO). A critical challenge is membrane fouling—accumulation of colloids, organics, or biofilms that reduce permeate flux—which is mitigated via surface patterning, hydrophilic coating, and photocatalytic membrane integration. Nanomaterials offer transformative capabilities: zero-valent iron (nZVI) nanoparticles enable reductive dehalogenation, while TiO₂ and ZnO nanostructures provide high photocatalytic surface area.
        </p>
      </>
    ),
    image:
      'https://images.pexels.com/photos/35425759/pexels-photo-35425759.jpeg?auto=compress&cs=tinysrgb&w=800',
    applications: [
      'Removal of heavy metals, dyes, and aromatic hydrocarbons from industrial effluent',
      'Photocatalytic breakdown of antibiotics, endocrine disruptors, and personal care products',
      'RO and NF membranes for desalination and drinking water purification',
      'Membrane bioreactors (MBR) for high-quality reuse water in water-scarce regions',
      'In-situ injection of nZVI or permeable reactive barriers for groundwater remediation',
    ],
    trends:
      'Bio-based adsorbents upcycled from lignocellulosic biomass and chitosan are being engineered into hierarchically porous carbons that rival commercial activated carbon at a fraction of the cost. Visible-light photocatalysts such as doped TiO₂, bismuth oxyhalides, and high-entropy oxides are moving beyond UV-lab-scale systems toward solar-driven reactor designs. Anti-fouling membranes with surface-patterned and photocatalytic coatings are demonstrating sustained flux recovery in pilot plants. Integration of adsorption–membrane–AOP hybrid trains enables near-zero liquid discharge (ZLD) in industrial parks.',
    tags: ['Photocatalysis', 'Membrane Filtration', 'Adsorption', 'nZVI', 'Zero Liquid Discharge'],
    icon: <Droplets className="w-5 h-5" />,
  },
];

const activeProjects: ActiveProject[] = [
  {
    title: 'High-Performance Supercapacitors',
    funder: 'BUET',
    duration: '2025-2027',
    pi: 'Dr. Muhammad Rakibul Islam',
    status: 'Active',
  },
  // {
  //   title: 'Graphene-Enhanced Polymer Composites',
  //   funder: 'Samsung SDI Partnership',
  //   duration: '2024-2025',
  //   pi: 'Dr. Ahmed',
  //   status: 'Active',
  // },
  // {
  //   title: 'Nanostructured Photocatalysts for Water Splitting',
  //   funder: 'BUET Research Grant',
  //   duration: '2022-2025',
  //   pi: 'Dr. Islam',
  //   status: 'Active',
  // },
];

function ResearchModal({
  theme,
  onClose,
}: {
  theme: ResearchTheme;
  onClose: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${theme.id}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        ref={contentRef}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#00897b]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Banner Image */}
          <div className="relative h-56 sm:h-72 lg:h-80">
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#00897b]/90 text-white">
                  {theme.icon}
                </span>
                <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                  Research Theme
                </span>
              </div>
              <h2
                id={`modal-title-${theme.id}`}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {theme.title}
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {theme.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#00897b]/10 text-[#00897b] text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base sm:text-lg">
              {theme.description}
            </div>

            {/* Applications */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-[#00897b]" />
                Key Applications
              </h3>
              <ul className="space-y-3">
                {theme.applications.map((app, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <ChevronRight className="w-4 h-4 text-[#00897b] mt-1 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emerging Trends */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-[#fff5f5] rounded-xl border border-[#630e1d]/10">
              <h3 className="text-lg sm:text-xl font-bold text-[#630e1d] mb-3 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Emerging Trends & Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">{theme.trends}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Research() {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ResearchTheme | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const displayedResearchAreas = showAll
    ? researchThemes
    : researchThemes.slice(0, 3);

  return (
    <div>
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-white via-white to-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#00897b] font-semibold mb-4">
                Research
              </p>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#630e1d] leading-tight"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Pushing the Boundaries of Materials Science
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Our research spans the fundamental understanding of
                nanomaterials to their application in solving real-world
                challenges in energy, environment, and technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Areas Grid */}
        <section className="py-20 bg-white" id="research-themes">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Research <span className="text-[#630e1d]">Themes</span>
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Explore our core research areas where fundamental science meets
                transformative engineering.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {displayedResearchAreas.map((area, index) => (
                <motion.article
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col cursor-pointer focus-within:ring-2 focus-within:ring-[#00897b] focus-within:ring-offset-2"
                  onClick={() => setSelectedTheme(area)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedTheme(area);
                    }
                  }}
                  role="button"
                  aria-label={`Open details for ${area.title}`}
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 overflow-hidden">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/90 text-[#00897b] shadow-sm backdrop-blur-sm">
                        {area.icon}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 group-hover:text-[#630e1d] transition-colors"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {area.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                      {area.summary}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {area.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {area.tags.length > 3 && (
                        <span className="px-2.5 py-0.5 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                          +{area.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Learn More */}
                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00897b] group-hover:text-[#00796b] transition-colors">
                        Learn More
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {!showAll && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-center pt-12"
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#00897b] text-white font-semibold rounded-full hover:bg-[#00796b] transition-all hover:shadow-lg hover:shadow-[#00897b]/25 focus:outline-none focus:ring-2 focus:ring-[#00897b] focus:ring-offset-2"
                >
                  See More
                  <ArrowDown size={20} />
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Active Projects */}
        <section className="py-20 bg-[#fff5f5]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Active <span className="text-[#630e1d]">Projects</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {activeProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 lg:p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-xl font-bold text-[#630e1d]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {project.title}
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Principal Investigator: {project.pi}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="px-4 py-1.5 bg-[#00897b]/10 text-[#00897b] text-sm font-medium rounded-full">
                        {project.duration}
                      </span>
                      <span className="text-sm text-gray-500">
                        {project.funder}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedTheme && (
          <ResearchModal
            theme={selectedTheme}
            onClose={() => setSelectedTheme(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
