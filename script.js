const QUESTION_LIMIT = 50;
const EXAM_TIME = 2700; // seconds

const allQuestions = [

// Chapter 2: Radiation Physics
// 1
  {
    "question": "What is considered the fundamental unit of matter?",
    "answers": [
      {"text": "Molecule", "correct": false},
      {"text": "Electron", "correct": false},
      {"text": "Atom", "correct": true},
      {"text": "Proton", "correct": false},
      {"text": "Neutron", "correct": false}
    ],
    "explanation": "The atom is the smallest unit of matter that retains the properties of an element."
  },
  // 2
  {
    "question": "Matter is best defined as anything that:",
    "answers": [
      {"text": "Produces energy", "correct": false},
      {"text": "Has mass and occupies space", "correct": true},
      {"text": "Contains electrons only", "correct": false},
      {"text": "Has electrical charge", "correct": false},
      {"text": "Can be seen under a microscope", "correct": false}
    ],
    "explanation": "Matter is anything that has mass and occupies space."
  },
  // 3
  {
    "question": "The atom consists primarily of:",
    "answers": [
      {"text": "Protons and neutrons only", "correct": false},
      {"text": "Nucleus and electrons", "correct": true},
      {"text": "Neutrons and photons", "correct": false},
      {"text": "Electrons and photons", "correct": false},
      {"text": "Ions and isotopes", "correct": false}
    ],
    "explanation": "The atom is composed of a nucleus and orbiting electrons."
  },
  // 4
  {
    "question": "The nucleus of an atom contains:",
    "answers": [
      {"text": "Electrons and neutrons", "correct": false},
      {"text": "Protons and electrons", "correct": false},
      {"text": "Protons and neutrons", "correct": true},
      {"text": "Only electrons", "correct": false},
      {"text": "Photons and protons", "correct": false}
    ],
    "explanation": "The nucleus contains protons and neutrons (nucleons)."
  },
  // 5
  {
    "question": "Which particle carries a positive charge?",
    "answers": [
      {"text": "Electron", "correct": false},
      {"text": "Neutron", "correct": false},
      {"text": "Proton", "correct": true},
      {"text": "Photon", "correct": false},
      {"text": "Neutrino", "correct": false}
    ],
    "explanation": "Protons are positively charged particles."
  },
  // 6
  {
    "question": "Which particle has no electrical charge?",
    "answers": [
      {"text": "Electron", "correct": false},
      {"text": "Proton", "correct": false},
      {"text": "Neutron", "correct": true},
      {"text": "Positron", "correct": false},
      {"text": "Ion", "correct": false}
    ],
    "explanation": "Neutrons are electrically neutral."
  },
  // 7
  {
    "question": "Most of the atom is composed of:",
    "answers": [
      {"text": "Solid mass", "correct": false},
      {"text": "Empty space", "correct": true},
      {"text": "Neutrons", "correct": false},
      {"text": "Protons", "correct": false},
      {"text": "Energy only", "correct": false}
    ],
    "explanation": "The atom is mostly empty space."
  },
  // 8
  {
    "question": "If an atom were the size of a football stadium, the nucleus would be about the size of a:",
    "answers": [
      {"text": "Tennis ball", "correct": false},
      {"text": "Baseball", "correct": false},
      {"text": "Football", "correct": true},
      {"text": "Marble", "correct": false},
      {"text": "Grain of sand", "correct": false}
    ],
    "explanation": "The nucleus is extremely small compared to the atom."
  },
  // 9
  {
    "question": "The identity of an atom is determined by:",
    "answers": [
      {"text": "Number of electrons only", "correct": false},
      {"text": "Arrangement of neutrons only", "correct": false},
      {"text": "Composition of nucleus and electrons", "correct": true},
      {"text": "Shape of atom", "correct": false},
      {"text": "Temperature", "correct": false}
    ],
    "explanation": "Atomic identity depends on nuclear composition and electron arrangement."
  },
  // 10
  {
    "question": "Atomic number refers to the number of:",
    "answers": [
      {"text": "Neutrons", "correct": false},
      {"text": "Protons", "correct": true},
      {"text": "Electrons and neutrons", "correct": false},
      {"text": "Nucleons", "correct": false},
      {"text": "Isotopes", "correct": false}
    ],
    "explanation": "Atomic number equals the number of protons."
  },
  {
    "question": "Mass number is the sum of:",
    "answers": [
      {"text": "Protons only", "correct": false},
      {"text": "Electrons only", "correct": false},
      {"text": "Protons and neutrons", "correct": true},
      {"text": "Neutrons and electrons", "correct": false},
      {"text": "Photons and electrons", "correct": false}
    ],
    "explanation": "Mass number = protons + neutrons."
  },
  {
    "question": "Electrons are described as:",
    "answers": [
      {"text": "Heavy particles", "correct": false},
      {"text": "Positively charged", "correct": false},
      {"text": "Negatively charged and very light", "correct": true},
      {"text": "Neutral particles", "correct": false},
      {"text": "Located in nucleus", "correct": false}
    ],
    "explanation": "Electrons are negatively charged and have minimal mass."
  },
  {
    "question": "An electron weighs approximately:",
    "answers": [
      {"text": "Equal to proton", "correct": false},
      {"text": "1/10 of proton", "correct": false},
      {"text": "1/100 of proton", "correct": false},
      {"text": "1/1800 of proton", "correct": true},
      {"text": "1800 times proton", "correct": false}
    ],
    "explanation": "Electron mass is about 1/1800 that of a proton."
  },
  {
    "question": "Electrons revolve around the nucleus in:",
    "answers": [
      {"text": "Random motion", "correct": false},
      {"text": "Fixed orbits or shells", "correct": true},
      {"text": "Straight lines", "correct": false},
      {"text": "Vibrational fields", "correct": false},
      {"text": "Energy waves only", "correct": false}
    ],
    "explanation": "Electrons move in defined shells."
  },
  {
    "question": "The K shell is:",
    "answers": [
      {"text": "Farthest from nucleus", "correct": false},
      {"text": "Lowest energy level", "correct": false},
      {"text": "Closest to nucleus", "correct": true},
      {"text": "Outside atom", "correct": false},
      {"text": "Not an electron shell", "correct": false}
    ],
    "explanation": "K shell is the innermost shell."
  },
  {
    "question": "Which shell has the highest energy level?",
    "answers": [
      {"text": "Q shell", "correct": false},
      {"text": "O shell", "correct": false},
      {"text": "M shell", "correct": false},
      {"text": "K shell", "correct": true},
      {"text": "L shell", "correct": false}
    ],
    "explanation": "The K shell is closest to nucleus and has highest binding energy."
  },
  {
    "question": "Maximum number of electron shells in an atom is:",
    "answers": [
      {"text": "5", "correct": false},
      {"text": "6", "correct": false},
      {"text": "7", "correct": true},
      {"text": "8", "correct": false},
      {"text": "10", "correct": false}
    ],
    "explanation": "Atoms may have up to 7 shells (K–Q)."
  },
  {
    "question": "Binding energy refers to:",
    "answers": [
      {"text": "Energy inside nucleus", "correct": false},
      {"text": "Attraction between protons and neutrons", "correct": false},
      {"text": "Attraction between nucleus and electrons", "correct": true},
      {"text": "Energy released by photons", "correct": false},
      {"text": "Electron mass", "correct": false}
    ],
    "explanation": "Binding energy is electrostatic attraction holding electrons in orbit."
  },
  {
    "question": "Binding energy is strongest in:",
    "answers": [
      {"text": "Outer shells", "correct": false},
      {"text": "Middle shells", "correct": false},
      {"text": "K shell", "correct": true},
      {"text": "Q shell", "correct": false},
      {"text": "O shell", "correct": false}
    ],
    "explanation": "Closest electrons experience strongest nuclear attraction."
  },
  {
    "question": "Electrons in outer shells have:",
    "answers": [
      {"text": "Strong binding energy", "correct": false},
      {"text": "Weak binding energy", "correct": true},
      {"text": "No energy", "correct": false},
      {"text": "Nuclear binding only", "correct": false},
      {"text": "Positive charge", "correct": false}
    ],
    "explanation": "Outer electrons are farther from nucleus, so weaker attraction."
  },
  {
    "question": "Binding energy is measured in:",
    "answers": [
      {"text": "Joules", "correct": false},
      {"text": "Watts", "correct": false},
      {"text": "Electron volts (eV)", "correct": true},
      {"text": "Hertz", "correct": false},
      {"text": "Newtons", "correct": false}
    ],
    "explanation": "Electron volts are standard for atomic energy levels."
  },
  {
    "question": "1 keV is equal to:",
    "answers": [
      {"text": "10 eV", "correct": false},
      {"text": "100 eV", "correct": false},
      {"text": "1000 eV", "correct": true},
      {"text": "10,000 eV", "correct": false},
      {"text": "1 eV", "correct": false}
    ],
    "explanation": "1 kilo electron volt = 1000 electron volts."
  },
  {
    "question": "Atomic number increases in the:",
    "answers": [
      {"text": "Periodic table", "correct": true},
      {"text": "Nuclear chart", "correct": false},
      {"text": "Electron shell diagram", "correct": false},
      {"text": "Energy wave chart", "correct": false},
      {"text": "Ion scale", "correct": false}
    ],
    "explanation": "Elements are arranged by atomic number in the periodic table."
  },
  {
    "question": "The periodic table is arranged based on:",
    "answers": [
      {"text": "Mass number", "correct": false},
      {"text": "Density", "correct": false},
      {"text": "Atomic number", "correct": true},
      {"text": "Binding energy", "correct": false},
      {"text": "Electron shells", "correct": false}
    ],
    "explanation": "Elements are ordered by increasing atomic number."
  },
  {
    "question": "Elements are defined as substances made of:",
    "answers": [
      {"text": "Two or more atoms", "correct": false},
      {"text": "One type of atom", "correct": true},
      {"text": "Only neutrons", "correct": false},
      {"text": "Only electrons", "correct": false},
      {"text": "Molecules only", "correct": false}
    ],
    "explanation": "Elements consist of identical atoms."
  },
  {
    "question": "The most complex known atom has atomic number:",
    "answers": [
      {"text": "100", "correct": false},
      {"text": "110", "correct": false},
      {"text": "118", "correct": true},
      {"text": "120", "correct": false},
      {"text": "130", "correct": false}
    ],
    "explanation": "Atomic number 118 (ununoctium/oganesson)."
  },
  {
    "question": "Electrons are maintained in orbit by:",
    "answers": [
      {"text": "Magnetic force", "correct": false},
      {"text": "Gravitational force", "correct": false},
      {"text": "Electrostatic attraction", "correct": true},
      {"text": "Nuclear decay", "correct": false},
      {"text": "Radiation pressure", "correct": false}
    ],
    "explanation": "Opposite charges attract."
  },
  {
    "question": "The nucleus occupies:",
    "answers": [
      {"text": "Most of the atom", "correct": false},
      {"text": "Half of the atom", "correct": false},
      {"text": "Very little space", "correct": true},
      {"text": "Entire atom", "correct": false},
      {"text": "No space", "correct": false}
    ],
    "explanation": "Nucleus is extremely small compared to atom."
  },
  {
    "question": "Neutrons contribute to:",
    "answers": [
      {"text": "Atomic number", "correct": false},
      {"text": "Electron configuration", "correct": false},
      {"text": "Mass number", "correct": true},
      {"text": "Charge only", "correct": false},
      {"text": "Energy shells", "correct": false}
    ],
    "explanation": "Neutrons add to atomic mass."
  },
  {
    "question": "Protons determine:",
    "answers": [
      {"text": "Atomic number", "correct": true},
      {"text": "Mass only", "correct": false},
      {"text": "Energy level", "correct": false},
      {"text": "Binding energy", "correct": false},
      {"text": "Electron speed", "correct": false}
    ],
    "explanation": "Proton count defines atomic number."
  },
  {
    "question": "A dental student is reviewing atomic structure. She learns that x-ray production depends on atomic interactions. The fundamental unit of matter is:",
    "answers": [
      {"text": "Molecule", "correct": false},
      {"text": "Atom", "correct": true},
      {"text": "Electron", "correct": false},
      {"text": "Photon", "correct": false},
      {"text": "Ion", "correct": false}
    ],
    "explanation": "Atom is the basic unit of matter."
  },
  {
    "question": "A radiographer explains that electrons in inner shells require more energy to remove. This is due to:",
    "answers": [
      {"text": "Weak nuclear force", "correct": false},
      {"text": "High binding energy", "correct": true},
      {"text": "Low atomic mass", "correct": false},
      {"text": "Electron repulsion", "correct": false},
      {"text": "Photon emission", "correct": false}
    ],
    "explanation": "Inner electrons are tightly bound."
  },
  {
    "question": "In an x-ray tube, inner shell electrons are most stable because:",
    "answers": [
      {"text": "They are far from nucleus", "correct": false},
      {"text": "They have weak binding energy", "correct": false},
      {"text": "They have strong binding energy", "correct": true},
      {"text": "They have no charge", "correct": false},
      {"text": "They are free electrons", "correct": false}
    ],
    "explanation": "K shell electrons are strongly bound."
  },
  {
    "question": "A student compares electron shells. Which shell is closest to the nucleus?",
    "answers": [
      {"text": "M", "correct": false},
      {"text": "L", "correct": false},
      {"text": "K", "correct": true},
      {"text": "O", "correct": false},
      {"text": "Q", "correct": false}
    ],
    "explanation": "The K shell is located closest to the nucleus and has the highest energy level. "
  },
  {
    "question": "The loss of an electron from an inner shell requires energy greater than:",
    "answers": [
      {"text": "Mass number", "correct": false},
      {"text": "Binding energy", "correct": true},
      {"text": "Atomic number", "correct": false},
      {"text": "Nuclear charge", "correct": false},
      {"text": "Electron mass", "correct": false}
    ],
    "explanation": "The energy required to remove an electron from its orbital shell must exceed the binding energy of the electron in that shell"
  },
  {
    "question": "The nucleus is best described as the:",
    "answers": [
      {"text": "Light outer region of the atom", "correct": false},
      {"text": "Region where electrons are found", "correct": false},
      {"text": "Dense core of the atom", "correct": true},
      {"text": "Empty space of the atom", "correct": false},
      {"text": "Energy field of photons", "correct": false}
    ],
    "explanation": "The nucleus is the dense central core containing protons and neutrons."
  },
  {
    "question": "Which statement correctly describes electrons?",
    "answers": [
      {"text": "They are located in the nucleus", "correct": false},
      {"text": "They are positively charged", "correct": false},
      {"text": "They have significant mass", "correct": false},
      {"text": "They are negatively charged particles", "correct": true},
      {"text": "They are made of neutrons", "correct": false}
    ],
    "explanation": "Electrons carry a negative charge and orbit the nucleus."
  },
  {
    "question": "The arrangement of electrons in specific regions around the nucleus is called:",
    "answers": [
      {"text": "Nuclear pattern", "correct": false},
      {"text": "Electron cloud collapse", "correct": false},
      {"text": "Electron shells or orbits", "correct": true},
      {"text": "Proton mapping", "correct": false},
      {"text": "Atomic decay", "correct": false}
    ],
    "explanation": "Electrons occupy defined energy levels called shells or orbits."
  },
  {
    "question": "Which shell has the lowest energy level (farthest from the nucleus)?",
    "answers": [
      {"text": "K", "correct": false},
      {"text": "L", "correct": false},
      {"text": "M", "correct": false},
      {"text": "Q", "correct": true},
      {"text": "N", "correct": false}
    ],
    "explanation": "The outermost shell (Q) has the lowest binding energy."
  },
  {
    "question": "The force that keeps electrons in orbit is primarily:",
    "answers": [
      {"text": "Gravitational attraction", "correct": false},
      {"text": "Nuclear fission", "correct": false},
      {"text": "Electrostatic attraction", "correct": true},
      {"text": "Magnetic repulsion", "correct": false},
      {"text": "Photon collision", "correct": false}
    ],
    "explanation": "Opposite charges attract, holding electrons in orbit."
  },
  {
    "question": "If an electron is located in the K shell, it will have:",
    "answers": [
      {"text": "Weak binding energy", "correct": false},
      {"text": "No binding energy", "correct": false},
      {"text": "Strong binding energy", "correct": true},
      {"text": "Negative mass", "correct": false},
      {"text": "Zero charge", "correct": false}
    ],
    "explanation": "K shell electrons are closest to nucleus and strongly bound."
  },
  {
    "question": "The term “nucleons” refers to:",
    "answers": [
      {"text": "Electrons only", "correct": false},
      {"text": "Protons and neutrons", "correct": true},
      {"text": "Photons and electrons", "correct": false},
      {"text": "Ions only", "correct": false},
      {"text": "Shell electrons", "correct": false}
    ],
    "explanation": "Nucleons are particles found in the nucleus."
  },
  {
    "question": "The atomic number of an element is equal to its number of:",
    "answers": [
      {"text": "Neutrons", "correct": false},
      {"text": "Protons", "correct": true},
      {"text": "Protons + neutrons", "correct": false},
      {"text": "Electrons + neutrons", "correct": false},
      {"text": "Shells", "correct": false}
    ],
    "explanation": "Atomic number is defined by proton count."
  },
  {
    "question": "A neutral atom has equal numbers of:",
    "answers": [
      {"text": "Protons and neutrons", "correct": false},
      {"text": "Neutrons and electrons", "correct": false},
      {"text": "Protons and electrons", "correct": true},
      {"text": "Electrons and photons", "correct": false},
      {"text": "Neutrons and ions", "correct": false}
    ],
    "explanation": "Neutral atoms have balanced positive and negative charges."
  },
  {
    "question": "The outermost shell of an atom is also called the:",
    "answers": [
      {"text": "Core shell", "correct": false},
      {"text": "Valence region", "correct": true},
      {"text": "K shell", "correct": false},
      {"text": "Nucleus shell", "correct": false},
      {"text": "Proton shell", "correct": false}
    ],
    "explanation": "Outer shells are involved in chemical behavior and are called valence shells."
  },
  {
    "question": "Which statement about electrons is TRUE?",
    "answers": [
      {"text": "They are heavier than protons", "correct": false},
      {"text": "They are located inside the nucleus", "correct": false},
      {"text": "They occupy energy levels outside the nucleus", "correct": true},
      {"text": "They have no electrical charge", "correct": false},
      {"text": "They determine atomic mass only", "correct": false}
    ],
    "explanation": "Electrons orbit the nucleus in defined energy levels."
  },
  {
    "question": "The energy required to remove an electron is called:",
    "answers": [
      {"text": "Nuclear force", "correct": false},
      {"text": "Binding energy", "correct": true},
      {"text": "Atomic weight", "correct": false},
      {"text": "Mass energy", "correct": false},
      {"text": "Ionization constant", "correct": false}
    ],
    "explanation": "Binding energy is the energy needed to remove an electron from its shell."
  },
  {
    "question": "Which shell has electrons with the weakest binding energy?",
    "answers": [
      {"text": "K", "correct": false},
      {"text": "L", "correct": false},
      {"text": "M", "correct": false},
      {"text": "N", "correct": false},
      {"text": "Outer shell (Q)", "correct": true}
    ],
    "explanation": "Outer shell electrons are farthest from the nucleus."
  },
  {
    "question": "The periodic table organizes elements based on increasing:",
    "answers": [
      {"text": "Mass number", "correct": false},
      {"text": "Electron shells", "correct": false},
      {"text": "Atomic number", "correct": true},
      {"text": "Neutron count", "correct": false},
      {"text": "Energy levels", "correct": false}
    ],
    "explanation": "Elements are arranged by increasing atomic number."
  },
  {
    "question": "A radiographer studying x-ray production must first understand atomic structure because:",
    "answers": [
      {"text": "X-rays are unrelated to atoms", "correct": false},
      {"text": "X-rays originate from electron interactions in atoms", "correct": true},
      {"text": "Only neutrons produce x-rays", "correct": false},
      {"text": "Protons generate radiation directly", "correct": false},
      {"text": "Atoms do not influence radiation", "correct": false}
    ],
    "explanation": "X-ray production depends on interactions involving atomic electrons."
  },
    {
    "question": "Which of the following best defines a molecule?",
    "answers": [
      {"text": "The smallest unit of an atom", "correct": false},
      {"text": "Two or more atoms joined by chemical bonds", "correct": true},
      {"text": "A charged particle formed by ionization", "correct": false},
      {"text": "A nucleus containing protons and neutrons", "correct": false},
      {"text": "A free electron in motion", "correct": false}
    ],
    "explanation": "A molecule is defined as two or more atoms joined by chemical bonds and represents the smallest unit of a substance with its properties."
  },
  {
    "question": "A neutral atom is characterized by:",
    "answers": [
      {"text": "More protons than electrons", "correct": false},
      {"text": "More electrons than protons", "correct": false},
      {"text": "Equal number of protons and electrons", "correct": true},
      {"text": "Absence of neutrons", "correct": false},
      {"text": "Completely filled inner shell only", "correct": false}
    ],
    "explanation": "Neutral atoms have equal numbers of protons (+) and electrons (−), balancing the charge."
  },
  {
    "question": "An atom that has gained or lost electrons is called a:",
    "answers": [
      {"text": "Molecule", "correct": false},
      {"text": "Neutron", "correct": false},
      {"text": "Ion", "correct": true},
      {"text": "Isotope", "correct": false},
      {"text": "Compound", "correct": false}
    ],
    "explanation": "An ion forms when an atom becomes electrically unbalanced by gaining or losing electrons."
  },
  {
    "question": "Ionization is best described as:",
    "answers": [
      {"text": "Formation of molecules", "correct": false},
      {"text": "Removal of neutrons from the nucleus", "correct": false},
      {"text": "Conversion of atoms into ions", "correct": true},
      {"text": "Fusion of atomic nuclei", "correct": false},
      {"text": "Splitting of molecules", "correct": false}
    ],
    "explanation": "Ionization is the process of converting an atom into an ion by gaining or losing electrons."
  },
  {
    "question": "When an electron is removed from an atom, the atom becomes:",
    "answers": [
      {"text": "A negative ion", "correct": false},
      {"text": "A positive ion", "correct": true},
      {"text": "A neutral atom", "correct": false},
      {"text": "A molecule", "correct": false},
      {"text": "A radioactive element", "correct": false}
    ],
    "explanation": "Loss of an electron leaves the atom with more protons than electrons → positive ion (cation)."
  },
  {
    "question": "The ejected electron during ionization becomes:",
    "answers": [
      {"text": "A proton", "correct": false},
      {"text": "A neutron", "correct": false},
      {"text": "A positive ion", "correct": false},
      {"text": "A negative ion", "correct": true},
      {"text": "A molecule", "correct": false}
    ],
    "explanation": "The removed electron carries a negative charge → becomes a negative ion."
  },
  {
    "question": "A dental radiographer explains that an atom with an incompletely filled outer shell tends to:",
    "answers": [
      {"text": "Remain neutral", "correct": false},
      {"text": "Lose all neutrons", "correct": false},
      {"text": "Capture electrons from nearby atoms", "correct": true},
      {"text": "Become radioactive", "correct": false},
      {"text": "Form only covalent bonds", "correct": false}
    ],
    "explanation": "Atoms with incomplete outer shells are unstable and seek electrons to achieve balance."
  },
  {
    "question": "Radiation is defined as:",
    "answers": [
      {"text": "Conversion of atoms into ions", "correct": false},
      {"text": "Emission and propagation of energy through space or matter", "correct": true},
      {"text": "Splitting of atomic nuclei", "correct": false},
      {"text": "Formation of molecules", "correct": false},
      {"text": "Chemical bonding process", "correct": false}
    ],
    "explanation": "Radiation is energy traveling as waves or particles through space or substances."
  },
  {
    "question": "Radioactivity refers to:",
    "answers": [
      {"text": "Absorption of radiation", "correct": false},
      {"text": "Stable atomic state", "correct": false},
      {"text": "Spontaneous disintegration of unstable atoms", "correct": true},
      {"text": "Formation of ions", "correct": false},
      {"text": "Electron sharing", "correct": false}
    ],
    "explanation": "Radioactivity is the spontaneous decay of unstable nuclei to achieve stability."
  },
  {
    "question": "A substance is considered radioactive if it:",
    "answers": [
      {"text": "Contains electrons", "correct": false},
      {"text": "Forms molecules", "correct": false},
      {"text": "Emits energy due to nuclear disintegration", "correct": true},
      {"text": "Has equal protons and electrons", "correct": false},
      {"text": "Is chemically reactive", "correct": false}
    ],
    "explanation": "Radioactive substances emit particles or rays due to nuclear decay."
  },
  {
    "question": "A patient asks whether dental x-rays involve radioactive materials. The correct response is:",
    "answers": [
      {"text": "Yes, because x-rays come from radioactive decay", "correct": false},
      {"text": "Yes, because all radiation is radioactive", "correct": false},
      {"text": "No, because dentistry uses radiation but not radioactivity", "correct": true},
      {"text": "No, because x-rays are not a form of energy", "correct": false},
      {"text": "Yes, because x-rays involve unstable nuclei", "correct": false}
    ],
    "explanation": "Dentistry uses x-radiation, not radioactivity. X-rays are produced artificially, not by nuclear decay."
  },
  {
    "question": "During ionization, an ion pair is formed. This consists of:",
    "answers": [
      {"text": "Two positive ions", "correct": false},
      {"text": "Two negative ions", "correct": false},
      {"text": "One positive ion and one negative ion", "correct": true},
      {"text": "Two neutral atoms", "correct": false},
      {"text": "One atom and one molecule", "correct": false}
    ],
    "explanation": "Ionization produces an ion pair: Positive ion (atom that lost electron) and Negative ion (ejected electron)."
  },
  {
    "question": "Which particle carries a negative charge?",
    "answers": [
      {"text": "Proton", "correct": false},
      {"text": "Neutron", "correct": false},
      {"text": "Electron", "correct": true},
      {"text": "Nucleus", "correct": false},
      {"text": "Ion pair", "correct": false}
    ],
    "explanation": "Electrons are negatively charged; protons are positive, neutrons neutral."
  },
  {
    "question": "A scientist observes atoms emitting energy spontaneously to reach a stable state. This describes:",
    "answers": [
      {"text": "Ionization", "correct": false},
      {"text": "Radiation", "correct": false},
      {"text": "Radioactivity", "correct": true},
      {"text": "Molecular bonding", "correct": false},
      {"text": "Electron capture", "correct": false}
    ],
    "explanation": "Spontaneous energy release from unstable atoms = radioactivity."
  },
  {
    "question": "Which statement best distinguishes radiation from radioactivity?",
    "answers": [
      {"text": "Radiation involves only particles", "correct": false},
      {"text": "Radioactivity involves only waves", "correct": false},
      {"text": "Radiation is energy emission; radioactivity is nuclear decay", "correct": true},
      {"text": "They are identical processes", "correct": false},
      {"text": "Radiation only occurs in unstable atoms", "correct": false}
    ],
    "explanation": "Radiation = energy transmission; Radioactivity = decay of unstable nuclei producing radiation."
  },
  {
    "question": "Ionizing radiation is best defined as radiation that:",
    "answers": [
      {"text": "Produces molecules", "correct": false},
      {"text": "Emits light energy only", "correct": false},
      {"text": "Removes or adds an electron to an atom", "correct": true},
      {"text": "Travels only in waves", "correct": false},
      {"text": "Has no effect on atoms", "correct": false}
    ],
    "explanation": "Ionizing radiation is defined as radiation capable of producing ions by removing or adding electrons."
  },
  {
    "question": "Ionizing radiation is classified into which two main types?",
    "answers": [
      {"text": "Alpha and beta radiation", "correct": false},
      {"text": "Particulate and electromagnetic radiation", "correct": true},
      {"text": "Protons and neutrons", "correct": false},
      {"text": "X-rays and gamma rays", "correct": false},
      {"text": "Cathode and beta rays", "correct": false}
    ],
    "explanation": "The two major categories are particulate radiation and electromagnetic radiation."
  },
  {
    "question": "Which of the following best describes particulate radiation?",
    "answers": [
      {"text": "Energy waves with no mass", "correct": false},
      {"text": "Charged photons", "correct": false},
      {"text": "Tiny particles of matter with mass traveling at high speed", "correct": true},
      {"text": "Invisible light waves", "correct": false},
      {"text": "Stationary particles", "correct": false}
    ],
    "explanation": "Particulate radiation consists of particles with mass that move rapidly in straight lines."
  },
  {
    "question": "Particulate radiation transmits energy primarily through:",
    "answers": [
      {"text": "Heat conduction", "correct": false},
      {"text": "Electromagnetic waves", "correct": false},
      {"text": "Chemical bonding", "correct": false},
      {"text": "Kinetic energy", "correct": true},
      {"text": "Electrical resistance", "correct": false}
    ],
    "explanation": "Energy transfer occurs via kinetic energy from fast-moving particles."
  },
  {
    "question": "Electrons in particulate radiation may be classified as:",
    "answers": [
      {"text": "Alpha particles and neutrons", "correct": false},
      {"text": "Protons and neutrons", "correct": false},
      {"text": "Beta particles and cathode rays", "correct": true},
      {"text": "Gamma rays and x-rays", "correct": false},
      {"text": "Isotopes and ions", "correct": false}
    ],
    "explanation": "Electrons are classified as beta particles or cathode rays, differing only in origin."
  },
  {
    "question": "Beta particles are best described as:",
    "answers": [
      {"text": "Neutrons from the nucleus", "correct": false},
      {"text": "Fast-moving electrons emitted from the nucleus", "correct": true},
      {"text": "Protons without charge", "correct": false},
      {"text": "Electrons from x-ray tubes", "correct": false},
      {"text": "Heavy atomic nuclei", "correct": false}
    ],
    "explanation": "Beta particles are high-speed electrons originating from the nucleus of radioactive atoms."
  },
  {
    "question": "Cathode rays differ from beta particles primarily in their:",
    "answers": [
      {"text": "Charge", "correct": false},
      {"text": "Mass", "correct": false},
      {"text": "Speed", "correct": false},
      {"text": "Origin", "correct": true},
      {"text": "Energy", "correct": false}
    ],
    "explanation": "Both are electrons, but differ only in origin: Beta from nucleus, Cathode rays from x-ray tube."
  },
  {
    "question": "A dental x-ray machine produces a stream of high-speed electrons. These are classified as:",
    "answers": [
      {"text": "Beta particles", "correct": false},
      {"text": "Alpha particles", "correct": false},
      {"text": "Cathode rays", "correct": true},
      {"text": "Protons", "correct": false},
      {"text": "Neutrons", "correct": false}
    ],
    "explanation": "Electrons produced in an x-ray tube are called cathode rays."
  },
  {
    "question": "Alpha particles are composed of:",
    "answers": [
      {"text": "One proton only", "correct": false},
      {"text": "One proton and one electron", "correct": false},
      {"text": "Two protons and two neutrons", "correct": true},
      {"text": "One neutron only", "correct": false},
      {"text": "Electrons only", "correct": false}
    ],
    "explanation": "Alpha particles consist of 2 protons + 2 neutrons and no electrons."
  },
  {
    "question": "Alpha particles originate from:",
    "answers": [
      {"text": "X-ray tubes", "correct": false},
      {"text": "Electron clouds", "correct": false},
      {"text": "Nuclei of heavy metals", "correct": true},
      {"text": "Hydrogen atoms", "correct": false},
      {"text": "Chemical reactions", "correct": false}
    ],
    "explanation": "They are emitted from the nuclei of heavy metals."
  },
  {
    "question": "Protons used in particulate radiation are best described as:",
    "answers": [
      {"text": "Negatively charged particles", "correct": false},
      {"text": "Neutral particles", "correct": false},
      {"text": "Hydrogen nuclei with +1 charge", "correct": true},
      {"text": "Electrons from nuclei", "correct": false},
      {"text": "Energy waves", "correct": false}
    ],
    "explanation": "Protons are hydrogen nuclei, with mass = 1 and charge = +1."
  },
  {
    "question": "Which of the following has no electrical charge?",
    "answers": [
      {"text": "Proton", "correct": false},
      {"text": "Electron", "correct": false},
      {"text": "Alpha particle", "correct": false},
      {"text": "Neutron", "correct": true},
      {"text": "Beta particle", "correct": false}
    ],
    "explanation": "Neutrons have no electrical charge (neutral)."
  },
  {
    "question": "A researcher studies a particle with a mass of 1 and no electrical charge. This particle is most likely a:",
    "answers": [
      {"text": "Proton", "correct": false},
      {"text": "Electron", "correct": false},
      {"text": "Alpha particle", "correct": false},
      {"text": "Neutron", "correct": true},
      {"text": "Beta particle", "correct": false}
    ],
    "explanation": "A neutron has mass = 1 and no charge."
  },
  {
    "question": "A radioactive atom emits a fast-moving electron from its nucleus. This is classified as:",
    "answers": [
      {"text": "Cathode radiation", "correct": false},
      {"text": "Alpha radiation", "correct": false},
      {"text": "Beta radiation", "correct": true},
      {"text": "Proton emission", "correct": false},
      {"text": "Neutron emission", "correct": false}
    ],
    "explanation": "Electrons emitted from the nucleus are beta particles."
  },
  {
    "question": "Which statement best summarizes particulate radiation?",
    "answers": [
      {"text": "It consists of energy waves only", "correct": false},
      {"text": "It has no mass and no charge", "correct": false},
      {"text": "It consists of fast-moving particles with mass", "correct": true},
      {"text": "It originates only from x-ray tubes", "correct": false},
      {"text": "It cannot cause ionization", "correct": false}
    ],
    "explanation": "Particulate radiation is composed of particles with mass that move at high speed and can ionize matter."
  },
  {
    "question": "Electromagnetic radiation is best defined as:",
    "answers": [
      {"text": "Propagation of particles with mass through space", "correct": false},
      {"text": "Propagation of wavelike energy without mass through space or matter", "correct": true},
      {"text": "Transfer of kinetic energy via matter only", "correct": false},
      {"text": "Emission of charged particles at variable speeds", "correct": false},
      {"text": "Transmission of sound waves through a medium", "correct": false}
    ],
    "explanation": "Electromagnetic radiation is defined as the propagation of wavelike energy without mass through space or matter. It is not composed of particles with mass and does not require a medium."
  },
  {
    "question": "A key feature of electromagnetic radiation is the relationship between its electric and magnetic fields. These fields are:",
    "answers": [
      {"text": "Parallel to each other", "correct": false},
      {"text": "Randomly oriented", "correct": false},
      {"text": "Perpendicular to each other", "correct": true},
      {"text": "Aligned in the same direction of travel only", "correct": false},
      {"text": "Absent in non-ionizing radiation", "correct": false}
    ],
    "explanation": "Electromagnetic radiation consists of oscillating electric and magnetic fields positioned at right angles to each other, which defines its nature."
  },
  {
    "question": "Which of the following is classified as ionizing electromagnetic radiation?",
    "answers": [
      {"text": "Radio waves", "correct": false},
      {"text": "Microwaves", "correct": false},
      {"text": "Infrared radiation", "correct": false},
      {"text": "Gamma rays", "correct": true},
      {"text": "Visible light", "correct": false}
    ],
    "explanation": "Only high-energy electromagnetic radiations—cosmic rays, gamma rays, and x-rays—are capable of ionization. The others listed are non-ionizing."
  },
  {
    "question": "A dental radiographer is explaining why x-rays can penetrate oral tissues to produce diagnostic images. Which property primarily explains this capability?",
    "answers": [
      {"text": "Long wavelength", "correct": false},
      {"text": "Low frequency", "correct": false},
      {"text": "High energy and short wavelength", "correct": true},
      {"text": "Low velocity", "correct": false},
      {"text": "Absence of photons", "correct": false}
    ],
    "explanation": "Penetrating power depends on energy, which is inversely related to wavelength. Shorter wavelength = higher energy = greater penetrating ability, which is why x-rays are useful in radiography."
  },
  {
    "question": "Electromagnetic radiation arranged according to energy levels is called the:",
    "answers": [
      {"text": "Photon field", "correct": false},
      {"text": "Wave distribution system", "correct": false},
      {"text": "Electromagnetic spectrum", "correct": true},
      {"text": "Radiation continuum", "correct": false},
      {"text": "Energy cascade", "correct": false}
    ],
    "explanation": "Electromagnetic radiations are organized based on energy into the electromagnetic spectrum, ranging from low-energy radio waves to high-energy cosmic rays."
  },
  {
    "question": "Which statement best describes a photon?",
    "answers": [
      {"text": "A particle with mass and charge", "correct": false},
      {"text": "A bundle of energy with no mass traveling as a wave", "correct": true},
      {"text": "A unit of matter with variable velocity", "correct": false},
      {"text": "A negatively charged subatomic particle", "correct": false},
      {"text": "A stationary packet of radiation", "correct": false}
    ],
    "explanation": "A photon is a discrete bundle of energy (quantum) that has no mass or weight and travels as a wave at the speed of light."
  },
  {
    "question": "All electromagnetic radiation travels at approximately:",
    "answers": [
      {"text": "3 × 10⁶ m/s", "correct": false},
      {"text": "3 × 10⁸ m/s", "correct": true},
      {"text": "3 × 10¹⁰ m/s", "correct": false},
      {"text": "186,000 m/s", "correct": false},
      {"text": "Variable speeds depending on frequency", "correct": false}
    ],
    "explanation": "All electromagnetic radiation travels at the speed of light, which is 3 × 10⁸ meters per second in a vacuum."
  },
  {
    "question": "Wavelength is defined as:",
    "answers": [
      {"text": "Number of waves passing a point per unit time", "correct": false},
      {"text": "Energy per photon", "correct": false},
      {"text": "Distance between successive wave crests", "correct": true},
      {"text": "Speed of electromagnetic radiation", "correct": false},
      {"text": "Amplitude of oscillation", "correct": false}
    ],
    "explanation": "Wavelength is the distance between the crest of one wave and the crest of the next, and it determines energy and penetrating power."
  },
  {
    "question": "Which statement correctly describes the relationship between frequency and wavelength?",
    "answers": [
      {"text": "High frequency corresponds to long wavelength", "correct": false},
      {"text": "Low frequency corresponds to short wavelength", "correct": false},
      {"text": "Frequency and wavelength are directly proportional", "correct": false},
      {"text": "High frequency corresponds to short wavelength", "correct": true},
      {"text": "There is no relationship", "correct": false}
    ],
    "explanation": "Frequency and wavelength are inversely related: High frequency → short wavelength → high energy; Low frequency → long wavelength → low energy."
  },
  {
    "question": "A patient asks why dental x-rays are effective for imaging hard tissues. The dentist explains that dental x-rays typically have a wavelength of approximately:",
    "answers": [
      {"text": "10 nm", "correct": false},
      {"text": "1 nm", "correct": false},
      {"text": "0.1 nm", "correct": true},
      {"text": "100 nm", "correct": false},
      {"text": "0.001 nm", "correct": false}
    ],
    "explanation": "Dental x-rays have a wavelength of approximately 0.1 nm (0.0000000001 m), which contributes to their high energy and ability to penetrate tissues."
  },
  {
    "question": "Which of the following best describes low-frequency electromagnetic radiation?",
    "answers": [
      {"text": "Short wavelength and high energy", "correct": false},
      {"text": "Long wavelength and low energy", "correct": true},
      {"text": "Short wavelength and low energy", "correct": false},
      {"text": "Long wavelength and high energy", "correct": false},
      {"text": "Variable wavelength with constant energy", "correct": false}
    ],
    "explanation": "Low-frequency waves have long wavelengths and less energy, making them non-ionizing and less penetrating."
  },
  {
    "question": "A student incorrectly states that increasing wavelength increases the penetrating power of radiation. What is the correct explanation?",
    "answers": [
      {"text": "Penetrating power is unrelated to wavelength", "correct": false},
      {"text": "Longer wavelengths increase energy", "correct": false},
      {"text": "Shorter wavelengths increase energy and penetration", "correct": true},
      {"text": "Frequency does not affect penetration", "correct": false},
      {"text": "Only photons determine penetration", "correct": false}
    ],
    "explanation": "Penetrating ability depends on energy, and shorter wavelengths correspond to higher energy, leading to greater penetration."
  },
  {
    "question": "Which concept describes electromagnetic radiation as discrete packets of energy?",
    "answers": [
      {"text": "Wave concept", "correct": false},
      {"text": "Velocity theory", "correct": false},
      {"text": "Quantum theory", "correct": false},
      {"text": "Partial concept", "correct": true},
      {"text": "Spectrum theory", "correct": false}
    ],
    "explanation": "The partial concept characterizes electromagnetic radiation as photons (quanta)—discrete bundles of energy."
  },
  {
    "question": "Which property refers to the number of waves passing a point in a given time?",
    "answers": [
      {"text": "Velocity", "correct": false},
      {"text": "Wavelength", "correct": false},
      {"text": "Frequency", "correct": true},
      {"text": "Amplitude", "correct": false},
      {"text": "Intensity", "correct": false}
    ],
    "explanation": "Frequency is defined as the number of wavelengths that pass a given point in a specific time period."
  },
  {
    "question": "A radiography student is comparing two types of electromagnetic radiation. One has higher frequency than the other. Which statement is correct?",
    "answers": [
      {"text": "It has lower energy and longer wavelength", "correct": false},
      {"text": "It has higher energy and shorter wavelength", "correct": true},
      {"text": "It travels slower", "correct": false},
      {"text": "It has greater mass", "correct": false},
      {"text": "It is non-ionizing", "correct": false}
    ],
    "explanation": "Higher frequency radiation has shorter wavelength, higher energy, and greater potential for ionization and penetration."
  },
  
  {
    "question": "X-radiation is best classified as:",
    "answers": [
      {"text": "Low-energy non-ionizing particulate radiation", "correct": false},
      {"text": "High-energy ionizing electromagnetic radiation", "correct": true},
      {"text": "Mechanical wave with mass", "correct": false},
      {"text": "Charged particle radiation", "correct": false},
      {"text": "Thermal radiation", "correct": false}
    ],
    "explanation": "X-rays are described as high-energy, ionizing electromagnetic radiation, meaning they have enough energy to remove electrons and produce ions."
  },
  {
    "question": "Which statement best describes x-ray photons?",
    "answers": [
      {"text": "Particles with mass and electrical charge", "correct": false},
      {"text": "Weightless bundles of energy without electrical charge", "correct": true},
      {"text": "Negatively charged particles traveling at variable speeds", "correct": false},
      {"text": "Massive particles with fixed energy", "correct": false},
      {"text": "Neutral atoms that emit radiation", "correct": false}
    ],
    "explanation": "X-rays consist of photons, which are weightless bundles of energy with no electrical charge that travel in waves."
  },
  {
    "question": "The ability of x-rays to produce ions is primarily due to their:",
    "answers": [
      {"text": "Low frequency", "correct": false},
      {"text": "High energy", "correct": true},
      {"text": "Long wavelength", "correct": false},
      {"text": "Neutral charge", "correct": false},
      {"text": "Slow velocity", "correct": false}
    ],
    "explanation": "Ionization occurs because x-rays possess high energy, enabling them to remove electrons from atoms."
  },
  {
    "question": "A dental student notes that x-rays behave both as waves and particles. This observation reflects which fundamental concept?",
    "answers": [
      {"text": "Dual nature of electromagnetic radiation", "correct": true},
      {"text": "Thermal conduction principle", "correct": false},
      {"text": "Newtonian mechanics", "correct": false},
      {"text": "Atomic mass theory", "correct": false},
      {"text": "Chemical bonding theory", "correct": false}
    ],
    "explanation": "X-rays exhibit both wave-like and particle-like properties, consistent with electromagnetic radiation behavior."
  },
  {
    "question": "X-rays travel at:",
    "answers": [
      {"text": "Speed dependent on tissue density", "correct": false},
      {"text": "Speed slower than visible light", "correct": false},
      {"text": "Speed of sound", "correct": false},
      {"text": "Speed of light", "correct": true},
      {"text": "Variable speeds depending on voltage", "correct": false}
    ],
    "explanation": "All electromagnetic radiation, including x-rays, travels at the speed of light."
  },
  {
    "question": "The component of the dental x-ray machine that regulates exposure factors such as time, kilovoltage, and milliamperage is the:",
    "answers": [
      {"text": "Tubehead", "correct": false},
      {"text": "Extension arm", "correct": false},
      {"text": "Control panel", "correct": true},
      {"text": "Transformer", "correct": false},
      {"text": "Position-indicating device", "correct": false}
    ],
    "explanation": "The control panel contains switches and selectors that regulate time, kVp, and mA, controlling the x-ray beam."
  },
  {
    "question": "Which part of the x-ray machine allows positioning of the tubehead?",
    "answers": [
      {"text": "Control panel", "correct": false},
      {"text": "Tubehead seal", "correct": false},
      {"text": "Extension arm", "correct": true},
      {"text": "Transformer", "correct": false},
      {"text": "Collimator", "correct": false}
    ],
    "explanation": "The extension arm supports and allows movement of the tubehead while housing electrical wires."
  },
  {
    "question": "During equipment inspection, a dentist notes overheating of the x-ray tube. Which component is primarily responsible for preventing this?",
    "answers": [
      {"text": "Metal housing", "correct": false},
      {"text": "Insulating oil", "correct": true},
      {"text": "Lead collimator", "correct": false},
      {"text": "Aluminum disks", "correct": false},
      {"text": "Tubehead seal", "correct": false}
    ],
    "explanation": "The insulating oil absorbs heat produced during x-ray generation, preventing overheating."
  },
  {
    "question": "The main function of the metal housing of the tubehead is to:",
    "answers": [
      {"text": "Increase x-ray intensity", "correct": false},
      {"text": "Filter low-energy radiation", "correct": false},
      {"text": "Protect the x-ray tube and ground high-voltage components", "correct": true},
      {"text": "Produce x-rays", "correct": false},
      {"text": "Collimate the beam", "correct": false}
    ],
    "explanation": "The metal housing encloses and protects internal components and provides grounding for safety."
  },
  {
    "question": "The tubehead seal primarily functions to:",
    "answers": [
      {"text": "Increase beam intensity", "correct": false},
      {"text": "Seal oil and filter the x-ray beam", "correct": true},
      {"text": "Produce x-rays", "correct": false},
      {"text": "Control voltage", "correct": false},
      {"text": "Focus electrons", "correct": false}
    ],
    "explanation": "The tubehead seal keeps oil contained and acts as a filter for the emerging x-ray beam."
  },
  {
    "question": "Which component is considered the “heart” of the x-ray generating system?",
    "answers": [
      {"text": "Transformer", "correct": false},
      {"text": "Control panel", "correct": false},
      {"text": "X-ray tube", "correct": true},
      {"text": "Collimator", "correct": false},
      {"text": "PID", "correct": false}
    ],
    "explanation": "The x-ray tube is where x-rays are actually produced, making it the central component."
  },
  {
    "question": "Aluminum disks in the x-ray machine serve to:",
    "answers": [
      {"text": "Increase beam size", "correct": false},
      {"text": "Filter out nonpenetrating long-wavelength x-rays", "correct": true},
      {"text": "Focus the beam", "correct": false},
      {"text": "Reduce heat", "correct": false},
      {"text": "Generate photons", "correct": false}
    ],
    "explanation": "Aluminum filtration removes low-energy, long-wavelength x-rays that do not contribute to image formation."
  },
  {
    "question": "A radiographer wants to reduce patient exposure by limiting the size of the x-ray beam. Which component is most directly responsible?",
    "answers": [
      {"text": "Aluminum disks", "correct": false},
      {"text": "Insulating oil", "correct": false},
      {"text": "Lead collimator", "correct": true},
      {"text": "Transformer", "correct": false},
      {"text": "Tubehead seal", "correct": false}
    ],
    "explanation": "The lead collimator restricts the size of the x-ray beam, reducing unnecessary exposure."
  },
  {
    "question": "The position-indicating device (PID) functions to:",
    "answers": [
      {"text": "Generate x-rays", "correct": false},
      {"text": "Absorb heat", "correct": false},
      {"text": "Aim and shape the x-ray beam", "correct": true},
      {"text": "Filter radiation", "correct": false},
      {"text": "Increase voltage", "correct": false}
    ],
    "explanation": "The PID (cone) directs and shapes the x-ray beam toward the target."
  },
  {
    "question": "A clinician refers to the “cone” when positioning the x-ray beam. This term refers to which component?",
    "answers": [
      {"text": "Lead collimator", "correct": false},
      {"text": "PID", "correct": true},
      {"text": "Tubehead seal", "correct": false},
      {"text": "Extension arm", "correct": false},
      {"text": "Transformer", "correct": false}
    ],
    "explanation": "The position-indicating device (PID) is commonly called the cone and is used to aim the beam."
  },
  {
    "question": "Which component alters the voltage of incoming electricity?",
    "answers": [
      {"text": "Control panel", "correct": false},
      {"text": "Transformer", "correct": true},
      {"text": "Tubehead seal", "correct": false},
      {"text": "PID", "correct": false},
      {"text": "Metal housing", "correct": false}
    ],
    "explanation": "The transformer modifies the voltage required for x-ray production."
  },
  {
    "question": "A malfunction prevents the exit of x-rays from the tubehead. Which structure is most likely compromised?",
    "answers": [
      {"text": "Metal housing", "correct": false},
      {"text": "Tubehead seal", "correct": true},
      {"text": "Insulating oil", "correct": false},
      {"text": "Transformer", "correct": false},
      {"text": "Extension arm", "correct": false}
    ],
    "explanation": "The tubehead seal allows x-rays to exit; damage would block emission."
  },
  {
    "question": "Which of the following best describes the interaction of x-ray photons with matter?",
    "answers": [
      {"text": "They pass through without interaction", "correct": false},
      {"text": "They only reflect off surfaces", "correct": false},
      {"text": "They cause ionization of atoms", "correct": true},
      {"text": "They convert into sound energy", "correct": false},
      {"text": "They increase mass of atoms", "correct": false}
    ],
    "explanation": "X-ray photons interact with matter and cause ionization, which is fundamental to both imaging and biological effects."
  },
  
  {
    "question": "The x-ray tube is best described as:",
    "answers": [
      {"text": "A metal container that directs x-rays", "correct": false},
      {"text": "A glass vacuum tube essential for x-ray production", "correct": true},
      {"text": "A conductor of electrical current only", "correct": false},
      {"text": "A heat-absorbing structure", "correct": false},
      {"text": "A beam-restricting device", "correct": false}
    ],
    "explanation": "The x-ray tube is the heart of the x-ray generating system and is a glass vacuum tube from which air has been removed to allow efficient electron flow and x-ray production."
  },
  {
    "question": "The primary function of the leaded-glass housing of the x-ray tube is to:",
    "answers": [
      {"text": "Generate electrons", "correct": false},
      {"text": "Focus the beam", "correct": false},
      {"text": "Prevent x-rays from escaping in all directions", "correct": true},
      {"text": "Increase beam intensity", "correct": false},
      {"text": "Convert electrons into photons", "correct": false}
    ],
    "explanation": "The leaded-glass housing confines radiation, preventing unnecessary exposure, while allowing controlled خروج through a designated window."
  },
  {
    "question": "The “window” of the leaded-glass tube allows:",
    "answers": [
      {"text": "Entry of electrons", "correct": false},
      {"text": "Exit of x-rays in a directed beam", "correct": true},
      {"text": "Cooling of the tube", "correct": false},
      {"text": "Voltage regulation", "correct": false},
      {"text": "Filtration of low-energy photons", "correct": false}
    ],
    "explanation": "The window is a specific area that permits the x-ray beam to exit and be directed toward filtering and collimating components."
  },
  {
    "question": "A dental radiography student is asked which component supplies electrons necessary for x-ray production. Which is correct?",
    "answers": [
      {"text": "Anode", "correct": false},
      {"text": "Copper stem", "correct": false},
      {"text": "Cathode", "correct": true},
      {"text": "Transformer", "correct": false},
      {"text": "PID", "correct": false}
    ],
    "explanation": "The cathode (negative electrode) is responsible for producing and supplying electrons used in x-ray generation."
  },
  {
    "question": "The tungsten filament functions to:",
    "answers": [
      {"text": "Dissipate heat", "correct": false},
      {"text": "Focus electrons", "correct": false},
      {"text": "Produce electrons when heated", "correct": true},
      {"text": "Convert electrons to photons", "correct": false},
      {"text": "Control voltage", "correct": false}
    ],
    "explanation": "The tungsten filament emits electrons via thermionic emission when heated."
  },
  {
    "question": "The molybdenum cup serves to:",
    "answers": [
      {"text": "Absorb heat", "correct": false},
      {"text": "Generate x-rays", "correct": false},
      {"text": "Focus electrons into a narrow beam", "correct": true},
      {"text": "Increase wavelength", "correct": false},
      {"text": "Filter radiation", "correct": false}
    ],
    "explanation": "The molybdenum cup directs and concentrates electrons toward the anode target."
  },
  {
    "question": "Electrons produced at the cathode are accelerated toward which structure?",
    "answers": [
      {"text": "Copper stem", "correct": false},
      {"text": "Leaded-glass housing", "correct": false},
      {"text": "Positive anode", "correct": true},
      {"text": "PID", "correct": false},
      {"text": "Control panel", "correct": false}
    ],
    "explanation": "Electrons flow from the negative cathode to the positive anode, where x-rays are produced."
  },
  {
    "question": "The primary function of the anode is to:",
    "answers": [
      {"text": "Supply electrons", "correct": false},
      {"text": "Focus the beam", "correct": false},
      {"text": "Convert electrons into x-ray photons", "correct": true},
      {"text": "Regulate current", "correct": false},
      {"text": "Absorb radiation", "correct": false}
    ],
    "explanation": "The anode converts kinetic energy of electrons into x-ray photons."
  },
  {
    "question": "The tungsten target is best described as:",
    "answers": [
      {"text": "A heat sink", "correct": false},
      {"text": "A focusing device", "correct": false},
      {"text": "A focal spot that produces x-rays", "correct": true},
      {"text": "A voltage regulator", "correct": false},
      {"text": "A beam restrictor", "correct": false}
    ],
    "explanation": "The tungsten target is where electrons strike, producing x-rays at the focal spot."
  },
  {
    "question": "The copper stem primarily functions to:",
    "answers": [
      {"text": "Produce electrons", "correct": false},
      {"text": "Focus the beam", "correct": false},
      {"text": "Dissipate heat away from the target", "correct": true},
      {"text": "Filter radiation", "correct": false},
      {"text": "Increase voltage", "correct": false}
    ],
    "explanation": "The copper stem removes heat generated at the tungsten target, preventing damage."
  },
  {
    "question": "A malfunction leads to overheating at the anode. Which structure is most directly responsible for preventing this?",
    "answers": [
      {"text": "Tungsten filament", "correct": false},
      {"text": "Molybdenum cup", "correct": false},
      {"text": "Copper stem", "correct": true},
      {"text": "Leaded-glass housing", "correct": false},
      {"text": "Window", "correct": false}
    ],
    "explanation": "The copper stem dissipates heat, protecting the tungsten target from thermal damage."
  },
  {
    "question": "Electricity used in x-ray production is best defined as:",
    "answers": [
      {"text": "Movement of ions in solution", "correct": false},
      {"text": "Flow of electrons through a conductor", "correct": true},
      {"text": "Transfer of heat energy", "correct": false},
      {"text": "Oscillation of magnetic fields", "correct": false},
      {"text": "Emission of photons", "correct": false}
    ],
    "explanation": "Electricity is the flow of electrons, which creates the current needed for x-ray production."
  },
  {
    "question": "Direct current (DC) is characterized by:",
    "answers": [
      {"text": "Electrons flowing in two directions", "correct": false},
      {"text": "Electrons flowing in one direction", "correct": true},
      {"text": "Alternating voltage cycles", "correct": false},
      {"text": "Variable polarity", "correct": false},
      {"text": "No electron movement", "correct": false}
    ],
    "explanation": "Direct current (DC) involves a steady, one-directional flow of electrons."
  },
  {
    "question": "Alternating current (AC) differs from DC because:",
    "answers": [
      {"text": "It has higher voltage", "correct": false},
      {"text": "Electrons flow in opposite directions", "correct": true},
      {"text": "It produces more heat", "correct": false},
      {"text": "It cannot be converted", "correct": false},
      {"text": "It lacks waveform", "correct": false}
    ],
    "explanation": "In AC, electrons alternate direction, producing a sine wave voltage pattern."
  },
  {
    "question": "To ensure electrons flow consistently from cathode to anode, AC must be converted to DC. This process is called:",
    "answers": [
      {"text": "Filtration", "correct": false},
      {"text": "Collimation", "correct": false},
      {"text": "Rectification", "correct": true},
      {"text": "Ionization", "correct": false},
      {"text": "Acceleration", "correct": false}
    ],
    "explanation": "Rectification converts AC to DC, ensuring proper electron flow for x-ray production."
  },
  {
    "question": "The dental x-ray tube acts as a:",
    "answers": [
      {"text": "Voltage stabilizer", "correct": false},
      {"text": "Self-rectifier", "correct": true},
      {"text": "Heat generator", "correct": false},
      {"text": "Beam restrictor", "correct": false},
      {"text": "Energy absorber", "correct": false}
    ],
    "explanation": "The x-ray tube converts AC to DC internally, ensuring electrons flow in one direction."
  },
  {
    "question": "Amperage measures:",
    "answers": [
      {"text": "Electrical force", "correct": false},
      {"text": "Electron flow quantity", "correct": true},
      {"text": "Radiation intensity", "correct": false},
      {"text": "Heat production", "correct": false},
      {"text": "Beam size", "correct": false}
    ],
    "explanation": "Amperage (mA) measures the number of electrons flowing through a conductor."
  },
  {
    "question": "Voltage is defined as:",
    "answers": [
      {"text": "Number of electrons", "correct": false},
      {"text": "Electrical force moving electrons", "correct": true},
      {"text": "Beam intensity", "correct": false},
      {"text": "Heat energy", "correct": false},
      {"text": "Wave frequency", "correct": false}
    ],
    "explanation": "Voltage (kV) is the force that drives electrons from cathode to anode."
  },
  {
    "question": "A radiographer increases the milliamperage setting. What is directly affected?",
    "answers": [
      {"text": "Energy of electrons", "correct": false},
      {"text": "Number of electrons produced", "correct": true},
      {"text": "Direction of current", "correct": false},
      {"text": "Wavelength of x-rays", "correct": false},
      {"text": "Speed of photons", "correct": false}
    ],
    "explanation": "Increasing mA increases the number of electrons, thus affecting x-ray quantity."
  },
  {
    "question": "A clinician adjusts the kilovoltage on the control panel. This primarily changes:",
    "answers": [
      {"text": "Electron quantity", "correct": false},
      {"text": "Electrical force between electrodes", "correct": true},
      {"text": "Beam size", "correct": false},
      {"text": "Heat dissipation", "correct": false},
      {"text": "Filtration level", "correct": false}
    ],
    "explanation": "Kilovoltage (kV) controls the force accelerating electrons, affecting their energy."
  },

  {
    "question": "An electrical circuit is best defined as:",
    "answers": [
      {"text": "A device that produces x-rays", "correct": false},
      {"text": "A path of electrical current", "correct": true},
      {"text": "A source of heat energy", "correct": false},
      {"text": "A radiation shielding system", "correct": false},
      {"text": "A voltage regulator", "correct": false}
    ],
    "explanation": "A circuit is defined as a path through which electrical current flows, which is essential for x-ray production."
  },
  {
    "question": "Which circuit in the x-ray machine is responsible for heating the filament?",
    "answers": [
      {"text": "High-voltage circuit", "correct": false},
      {"text": "Control circuit", "correct": false},
      {"text": "Filament (low-voltage) circuit", "correct": true},
      {"text": "Rectifier circuit", "correct": false},
      {"text": "Autotransformer circuit", "correct": false}
    ],
    "explanation": "The low-voltage (filament) circuit supplies current to heat the filament and operates at 3–5 V, controlled by mA settings."
  },
  {
    "question": "The voltage range used in the filament circuit is:",
    "answers": [
      {"text": "65,000–100,000 V", "correct": false},
      {"text": "110–220 V", "correct": false},
      {"text": "3–5 V", "correct": true},
      {"text": "5,000–10,000 V", "correct": false},
      {"text": "0.1–1 V", "correct": false}
    ],
    "explanation": "The filament circuit operates at a low voltage of 3–5 volts to heat the x-ray tube filament."
  },
  {
    "question": "The high-voltage circuit in dental x-ray production primarily functions to:",
    "answers": [
      {"text": "Heat the filament", "correct": false},
      {"text": "Regulate current flow", "correct": false},
      {"text": "Accelerate electrons to produce x-rays", "correct": true},
      {"text": "Cool the x-ray tube", "correct": false},
      {"text": "Filter radiation", "correct": false}
    ],
    "explanation": "The high-voltage circuit (65,000–100,000 V) provides energy to accelerate electrons toward the anode, producing x-rays."
  },
  {
    "question": "A radiography student increases the kVp setting on the control panel. Which circuit is being adjusted?",
    "answers": [
      {"text": "Filament circuit", "correct": false},
      {"text": "Low-voltage circuit", "correct": false},
      {"text": "High-voltage circuit", "correct": true},
      {"text": "Rectification circuit", "correct": false},
      {"text": "Transformer circuit only", "correct": false}
    ],
    "explanation": "Kilovoltage (kVp) controls the high-voltage circuit, which determines electron acceleration and x-ray energy."
  },
  {
    "question": "Which of the following controls the filament circuit?",
    "answers": [
      {"text": "Kilovoltage (kV) setting", "correct": false},
      {"text": "Milliamperage (mA) setting", "correct": true},
      {"text": "Exposure timer only", "correct": false},
      {"text": "Autotransformer only", "correct": false},
      {"text": "Rectifier system", "correct": false}
    ],
    "explanation": "The filament circuit is controlled by mA settings, which regulate electron flow and filament heating."
  },
  {
    "question": "A transformer is best described as a device that:",
    "answers": [
      {"text": "Generates x-rays", "correct": false},
      {"text": "Converts radiation to heat", "correct": false},
      {"text": "Increases or decreases voltage in a circuit", "correct": true},
      {"text": "Controls beam size", "correct": false},
      {"text": "Filters electrons", "correct": false}
    ],
    "explanation": "A transformer adjusts voltage levels in electrical circuits used in x-ray production."
  },
  {
    "question": "Which transformer decreases voltage from the incoming line voltage to 3–5 V?",
    "answers": [
      {"text": "Step-up transformer", "correct": false},
      {"text": "Step-down transformer", "correct": true},
      {"text": "Autotransformer", "correct": false},
      {"text": "Rectifier transformer", "correct": false},
      {"text": "Voltage stabilizer", "correct": false}
    ],
    "explanation": "The step-down transformer reduces voltage from 110–220 V to 3–5 V for the filament circuit."
  },
  {
    "question": "The step-up transformer increases voltage to:",
    "answers": [
      {"text": "3–5 V", "correct": false},
      {"text": "110–220 V", "correct": false},
      {"text": "65,000–100,000 V", "correct": true},
      {"text": "500 V", "correct": false},
      {"text": "1,000 V", "correct": false}
    ],
    "explanation": "The step-up transformer increases voltage to the level required for x-ray production (65,000–100,000 V)."
  },
  {
    "question": "A dental x-ray machine fails to produce sufficient penetrating radiation. The problem is traced to insufficient high voltage. Which transformer is most likely malfunctioning?",
    "answers": [
      {"text": "Step-down transformer", "correct": false},
      {"text": "Step-up transformer", "correct": true},
      {"text": "Autotransformer", "correct": false},
      {"text": "Filament transformer", "correct": false},
      {"text": "Rectifier unit", "correct": false}
    ],
    "explanation": "The step-up transformer is responsible for generating high voltage needed to accelerate electrons and produce x-rays."
  },
  {
    "question": "The autotransformer primarily functions to:",
    "answers": [
      {"text": "Increase x-ray intensity", "correct": false},
      {"text": "Generate electrons", "correct": false},
      {"text": "Correct minor voltage fluctuations", "correct": true},
      {"text": "Convert AC to DC", "correct": false},
      {"text": "Filter radiation", "correct": false}
    ],
    "explanation": "The autotransformer acts as a voltage compensator, stabilizing small fluctuations in current."
  },
  {
    "question": "Which transformer is responsible for voltage stabilization rather than major conversion?",
    "answers": [
      {"text": "Step-up transformer", "correct": false},
      {"text": "Step-down transformer", "correct": false},
      {"text": "Autotransformer", "correct": true},
      {"text": "Isolation transformer", "correct": false},
      {"text": "Rectifier transformer", "correct": false}
    ],
    "explanation": "The autotransformer corrects minor fluctuations and does not perform major voltage changes."
  },
  {
    "question": "During an x-ray exposure, the technician notices inconsistent output due to slight power fluctuations. Which component compensates for this issue?",
    "answers": [
      {"text": "Step-up transformer", "correct": false},
      {"text": "Step-down transformer", "correct": false},
      {"text": "Autotransformer", "correct": true},
      {"text": "Control panel", "correct": false},
      {"text": "High-voltage circuit", "correct": false}
    ],
    "explanation": "The autotransformer stabilizes minor fluctuations in current, ensuring consistent output."
  },
  {
    "question": "The high-voltage circuit is controlled by:",
    "answers": [
      {"text": "mA settings", "correct": false},
      {"text": "kV settings", "correct": true},
      {"text": "Exposure time only", "correct": false},
      {"text": "Autotransformer only", "correct": false},
      {"text": "Filament heating system", "correct": false}
    ],
    "explanation": "The kilovoltage (kV) control regulates the high-voltage circuit, affecting electron acceleration."
  },
  {
    "question": "A radiographer adjusts milliamperage to increase the number of electrons reaching the anode. Which circuit is directly affected?",
    "answers": [
      {"text": "High-voltage circuit", "correct": false},
      {"text": "Filament circuit", "correct": true},
      {"text": "Step-up transformer", "correct": false},
      {"text": "Autotransformer", "correct": false},
      {"text": "Rectifier circuit", "correct": false}
    ],
    "explanation": "mA controls the filament circuit, which determines electron production at the cathode."
  },
  {
    "question": "Which voltage range corresponds to the high-voltage circuit in dental x-ray production?",
    "answers": [
      {"text": "1–10 V", "correct": false},
      {"text": "3–5 V", "correct": false},
      {"text": "65,000–100,000 V", "correct": true},
      {"text": "110–220 V", "correct": false},
      {"text": "500–1,000 V", "correct": false}
    ],
    "explanation": "The high-voltage circuit operates at 65,000–100,000 volts to generate x-rays."
  },
  {
    "question": "The primary purpose of the filament circuit is to:",
    "answers": [
      {"text": "Produce x-rays directly", "correct": false},
      {"text": "Regulate beam size", "correct": false},
      {"text": "Heat the filament and control electron production", "correct": true},
      {"text": "Increase voltage", "correct": false},
      {"text": "Cool the anode", "correct": false}
    ],
    "explanation": "The filament circuit supplies low voltage to heat the filament and regulate electron emission."
  },
  {
    "question": "A technician increases kV but notices no change in filament heating. This is because kV affects:",
    "answers": [
      {"text": "Only filament circuit", "correct": false},
      {"text": "Only high-voltage circuit", "correct": true},
      {"text": "Autotransformer only", "correct": false},
      {"text": "Both circuits equally", "correct": false},
      {"text": "Cooling system", "correct": false}
    ],
    "explanation": "kV controls the high-voltage circuit only, not filament heating."
  },

  {
    "question": "The initial source of electrical energy for dental x-ray production is:",
    "answers": [
      {"text": "Control panel battery", "correct": false},
      {"text": "Step-down transformer", "correct": false},
      {"text": "Wall outlet", "correct": true},
      {"text": "Tubehead seal", "correct": false},
      {"text": "Autotransformer", "correct": false}
    ],
    "explanation": "X-ray production begins when electricity from the wall outlet supplies power, entering the system through the control panel."
  },
  {
    "question": "After entering the control panel, electrical current is directed first to:",
    "answers": [
      {"text": "High-voltage circuit", "correct": false},
      {"text": "Filament circuit and step-down transformer", "correct": true},
      {"text": "PID", "correct": false},
      {"text": "Anode", "correct": false},
      {"text": "Tubehead seal", "correct": false}
    ],
    "explanation": "The current travels to the tubehead, where it enters the filament circuit and step-down transformer, which prepares low voltage for filament heating."
  },
  {
    "question": "The step-down transformer reduces incoming voltage to:",
    "answers": [
      {"text": "65,000–100,000 V", "correct": false},
      {"text": "110–220 V", "correct": false},
      {"text": "3–5 V", "correct": true},
      {"text": "0.1–1 V", "correct": false},
      {"text": "10–20 V", "correct": false}
    ],
    "explanation": "The step-down transformer decreases 110–220 V line voltage to 3–5 V, required for filament heating."
  },
  {
    "question": "Thermionic emission refers to:",
    "answers": [
      {"text": "Conversion of x-rays into heat", "correct": false},
      {"text": "Release of electrons from a heated tungsten filament", "correct": true},
      {"text": "Acceleration of electrons toward the anode", "correct": false},
      {"text": "Filtering of low-energy photons", "correct": false},
      {"text": "Voltage stabilization in the circuit", "correct": false}
    ],
    "explanation": "Thermionic emission is the release of electrons when the tungsten filament is heated by electrical current."
  },
  {
    "question": "The electron cloud formed during thermionic emission is located around the:",
    "answers": [
      {"text": "Anode target", "correct": false},
      {"text": "PID", "correct": false},
      {"text": "Tungsten filament", "correct": true},
      {"text": "Copper stem", "correct": false},
      {"text": "Control panel", "correct": false}
    ],
    "explanation": "Electrons released during thermionic emission form a cloud around the heated tungsten filament in the cathode."
  },
  {
    "question": "A radiography student notes that electrons remain near the filament until exposure is initiated. What keeps them in place initially?",
    "answers": [
      {"text": "PID restriction", "correct": false},
      {"text": "Step-up transformer", "correct": false},
      {"text": "Electron cloud formation", "correct": true},
      {"text": "Lead collimator", "correct": false},
      {"text": "Tubehead seal", "correct": false}
    ],
    "explanation": "Electrons remain in an electron cloud around the filament until the high-voltage circuit is activated."
  },
  {
    "question": "Activation of the high-voltage circuit occurs when:",
    "answers": [
      {"text": "Control panel is turned on", "correct": false},
      {"text": "Exposure button is pressed", "correct": true},
      {"text": "Filament heats up", "correct": false},
      {"text": "Wall outlet is connected", "correct": false},
      {"text": "PID is adjusted", "correct": false}
    ],
    "explanation": "The high-voltage circuit is activated when the exposure button is pushed, initiating x-ray production."
  },
  {
    "question": "The distance between the cathode and anode is:",
    "answers": [
      {"text": "Several inches", "correct": false},
      {"text": "2 inches", "correct": false},
      {"text": "Less than ½ inch", "correct": true},
      {"text": "1 meter", "correct": false},
      {"text": "Variable depending on voltage", "correct": false}
    ],
    "explanation": "Electrons travel across a very short distance (< ½ inch) between cathode and anode."
  },
  {
    "question": "The molybdenum cup in the cathode primarily functions to:",
    "answers": [
      {"text": "Produce x-rays", "correct": false},
      {"text": "Accelerate electrons", "correct": false},
      {"text": "Direct electrons toward the anode target", "correct": true},
      {"text": "Absorb heat", "correct": false},
      {"text": "Generate voltage", "correct": false}
    ],
    "explanation": "The molybdenum cup focuses and directs electrons toward the tungsten target in the anode."
  },
  {
    "question": "A malfunction causes electrons to scatter rather than travel toward the target. Which structure is most likely affected?",
    "answers": [
      {"text": "Copper stem", "correct": false},
      {"text": "Molybdenum cup", "correct": true},
      {"text": "Step-down transformer", "correct": false},
      {"text": "PID", "correct": false},
      {"text": "Aluminum disk", "correct": false}
    ],
    "explanation": "The molybdenum cup directs and focuses electrons, ensuring they travel to the anode target."
  },
  {
    "question": "When electrons strike the tungsten target, most of the energy is converted into:",
    "answers": [
      {"text": "X-rays only", "correct": false},
      {"text": "Heat only", "correct": true},
      {"text": "Heat and x-rays equally", "correct": false},
      {"text": "X-rays and light", "correct": false},
      {"text": "Electrical energy", "correct": false}
    ],
    "explanation": "Less than 1% becomes x-rays; about 99% is converted into heat."
  },
  {
    "question": "The percentage of energy converted into x-rays is approximately:",
    "answers": [
      {"text": "10%", "correct": false},
      {"text": "50%", "correct": false},
      {"text": "1%", "correct": true},
      {"text": "25%", "correct": false},
      {"text": "75%", "correct": false}
    ],
    "explanation": "Only less than 1% of kinetic energy becomes x-rays, while the rest is heat."
  },
  {
    "question": "Most heat generated at the anode is absorbed by:",
    "answers": [
      {"text": "PID", "correct": false},
      {"text": "Aluminum disk", "correct": false},
      {"text": "Insulating oil in the tubehead", "correct": true},
      {"text": "Control panel", "correct": false},
      {"text": "Leaded-glass window", "correct": false}
    ],
    "explanation": "Heat is carried away by the copper stem and absorbed by insulating oil."
  },
  {
    "question": "A dental x-ray tube overheats during repeated exposures. Which component normally prevents this?",
    "answers": [
      {"text": "Lead collimator", "correct": false},
      {"text": "Insulating oil", "correct": true},
      {"text": "PID", "correct": false},
      {"text": "Step-up transformer", "correct": false},
      {"text": "Aluminum disk", "correct": false}
    ],
    "explanation": "The insulating oil absorbs heat generated in the tubehead, preventing overheating."
  },
  {
    "question": "X-rays are prevented from escaping in all directions by the:",
    "answers": [
      {"text": "Aluminum disk", "correct": false},
      {"text": "PID", "correct": false},
      {"text": "Leaded-glass housing", "correct": true},
      {"text": "Molybdenum cup", "correct": false},
      {"text": "Copper stem", "correct": false}
    ],
    "explanation": "The leaded-glass housing contains radiation, except for controlled exit through the window."
  },
  {
    "question": "The function of the aluminum disks is to:",
    "answers": [
      {"text": "Increase beam intensity", "correct": false},
      {"text": "Filter out longer wavelength x-rays", "correct": true},
      {"text": "Generate electrons", "correct": false},
      {"text": "Direct beam", "correct": false},
      {"text": "Absorb heat", "correct": false}
    ],
    "explanation": "Aluminum disks remove non-penetrating, long-wavelength x-rays."
  },
  {
    "question": "A radiographer wants to reduce patient exposure by eliminating low-energy radiation from the beam. Which component is responsible?",
    "answers": [
      {"text": "PID", "correct": false},
      {"text": "Lead collimator", "correct": false},
      {"text": "Aluminum disks", "correct": true},
      {"text": "Tubehead seal", "correct": false},
      {"text": "Step-down transformer", "correct": false}
    ],
    "explanation": "Aluminum filtration removes long-wavelength, low-energy x-rays, improving beam quality."
  },
  {
    "question": "The lead collimator primarily functions to:",
    "answers": [
      {"text": "Increase x-ray energy", "correct": false},
      {"text": "Restrict the size of the x-ray beam", "correct": true},
      {"text": "Produce electrons", "correct": false},
      {"text": "Convert heat", "correct": false},
      {"text": "Control voltage", "correct": false}
    ],
    "explanation": "The lead collimator limits beam size, reducing unnecessary exposure."
  },
  {
    "question": "After collimation, the x-ray beam travels through:",
    "answers": [
      {"text": "Copper stem", "correct": false},
      {"text": "PID", "correct": true},
      {"text": "Control panel", "correct": false},
      {"text": "Step-down transformer", "correct": false},
      {"text": "Autotransformer", "correct": false}
    ],
    "explanation": "The beam travels down the lead-lined position-indicating device (PID)."
  },
  {
    "question": "A dental radiographer notices a wider-than-normal x-ray beam. Which component is most likely malfunctioning?",
    "answers": [
      {"text": "PID", "correct": true},
      {"text": "Step-up transformer", "correct": false},
      {"text": "Control panel", "correct": false},
      {"text": "Tubehead seal", "correct": false},
      {"text": "Autotransformer", "correct": false}
    ],
    "explanation": "The PID shapes and directs the beam, so failure results in beam widening."
  },

  {
    "question": "In a dental x-ray tube, the majority of the x-ray photons are produced by which of the following mechanisms?",
    "answers": [
      {"text": "Characteristic radiation", "correct": false},
      {"text": "General (braking) radiation", "correct": true},
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Compton scattering", "correct": false},
      {"text": "Coherent scattering", "correct": false}
    ],
    "explanation": "Approximately 70% of the x-ray energy produced at the anode is classified as general radiation (bremsstrahlung). This occurs when high-speed electrons are slowed down or stopped by the tungsten target."
  },
  {
    "question": "A dental radiographer sets the x-ray machine to 65 kV for a specific procedure. Which of the following statements is true regarding the production of characteristic radiation in this scenario?",
    "answers": [
      {"text": "It will account for the majority of the x-ray beam.", "correct": false},
      {"text": "It will be produced by the dislodgment of K-shell electrons.", "correct": false},
      {"text": "It will not be produced at this kilovoltage setting.", "correct": true},
      {"text": "It will result in high-energy photons exceeding 70 keV.", "correct": false},
      {"text": "It will be the result of electrons hitting the tungsten nuclei directly.", "correct": false}
    ],
    "explanation": "Characteristic radiation occurs only at 70 kV and above because the binding energy of the tungsten K-shell electron is approximately 70 keV. Since the machine is set to 65 kV, there is insufficient energy to dislodge the K-shell electron."
  },
  {
    "question": "Why does general (braking) radiation consist of x-rays of many different energies and wavelengths rather than a single discrete energy?",
    "answers": [
      {"text": "Tungsten atoms have multiple shells with different binding energies.", "correct": false},
      {"text": "Electrons undergo multiple interactions, losing varying amounts of kinetic energy.", "correct": true},
      {"text": "The x-ray beam is filtered by the tubehead before exiting.", "correct": false},
      {"text": "The primary beam is converted into secondary radiation immediately.", "correct": false},
      {"text": "The x-rays are deflected in different directions by the patient’s tissues.", "correct": false}
    ],
    "explanation": "Electrons rarely hit the nucleus directly; most miss and slow down, producing lower-energy photons. An electron can penetrate many atoms, producing x-rays of varying energies before all its kinetic energy is imparted."
  },
  {
    "question": "During an intraoral radiographic procedure, the primary beam interacts with the patient's cheek. The resulting radiation that is deflected in all directions and travels to various parts of the dental operatory is defined as:",
    "answers": [
      {"text": "Primary radiation", "correct": false},
      {"text": "Useful beam", "correct": false},
      {"text": "Braking radiation", "correct": false},
      {"text": "Scatter radiation", "correct": true},
      {"text": "Characteristic radiation", "correct": false}
    ],
    "explanation": "Scatter radiation is a form of secondary radiation that results from an x-ray being deflected from its path by interaction with matter. It travels in all directions and is detrimental to both the patient and the radiographer."
  },
  {
    "question": "Which term specifically refers to the penetrating x-ray beam that is produced at the target of the anode and exits the tubehead?",
    "answers": [
      {"text": "Secondary radiation", "correct": false},
      {"text": "Scatter radiation", "correct": false},
      {"text": "Primary radiation", "correct": true},
      {"text": "Ionizing radiation", "correct": false},
      {"text": "General radiation", "correct": false}
    ],
    "explanation": "Primary radiation refers to the penetrating x-ray beam produced at the target of the anode that exits the tubehead, also known as the \"useful beam.\""
  },
  {
  "question": "Which electrons have the greatest binding energy?",
  "answers": [
    { "text": "N-shell", "correct": false},
    { "text": "M-shell", "correct": false},
    { "text": "L-shell", "correct": false},
    { "text": "K-shell", "correct": true},
    { "text": "O-shell", "correct": false}
  ],
  "explanation": "Electrons in shells closer to the nucleus have a stronger attraction and therefore a greater binding energy. The K-shell is the innermost shell, followed by L, M, and N shells further out."
},

  {
    "question": "What type of electrical charge does the electron carry?",
    "answers": [
      {"text": "positive", "correct": false},
      {"text": "negative", "correct": true},
      {"text": "no charge", "correct": false},
      {"text": "positive or negative", "correct": false}
    ],
    "explanation": "Electrons carry a negative electrical charge."
  },
  {
    "question": "Which term describes two or more atoms that are joined by chemical bonds?",
    "answers": [
      {"text": "ion", "correct": false},
      {"text": "ion pair", "correct": false},
      {"text": "molecule", "correct": true},
      {"text": "proton", "correct": false}
    ],
    "explanation": "A molecule is formed when two or more atoms are joined by chemical bonds."
  },
  {
    "question": "Which statement describes ionization?",
    "answers": [
      {"text": "atom without a nucleus", "correct": false},
      {"text": "atom that loses an electron", "correct": true},
      {"text": "atom with equal numbers of protons and electrons", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Ionization is the process where an atom loses or gains electrons, resulting in a charged particle."
  },
  {
    "question": "Which term describes the process by which unstable atoms undergo spontaneous disintegration in an effort to attain a more balanced nuclear state?",
    "answers": [
      {"text": "radiation", "correct": false},
      {"text": "radioactivity", "correct": true},
      {"text": "ionization", "correct": false},
      {"text": "ionizing radiation", "correct": false}
    ],
    "explanation": "Radioactivity is the spontaneous disintegration of unstable atoms to achieve nuclear stability."
  },
  {
    "question": "Which is not a type of particulate radiation?",
    "answers": [
      {"text": "alpha particles", "correct": false},
      {"text": "beta particles", "correct": false},
      {"text": "protons", "correct": false},
      {"text": "nucleons", "correct": true}
    ],
    "explanation": "Nucleons (protons and neutrons) are components of the nucleus, but 'nucleons' as a term is not classified as a type of particulate radiation."
  },

  {
    "question": "Which is not a type of electromagnetic radiation?",
    "answers": [
      {"text": "electrons", "correct": true},
      {"text": "radar waves", "correct": false},
      {"text": "microwaves", "correct": false},
      {"text": "x-rays", "correct": false}
    ],
    "explanation": "Electrons are particles, not a type of electromagnetic radiation, unlike radar waves, microwaves, and x-rays."
  },
  {
    "question": "Which statement is incorrect?",
    "answers": [
      {"text": "Velocity is the speed of a wave.", "correct": false},
      {"text": "Wavelength is the distance between waves.", "correct": false},
      {"text": "Frequency is the number of wavelengths that pass a given point in a certain amount of time.", "correct": false},
      {"text": "Frequency and wavelength are inversely related.", "correct": false}
    ],
    "explanation": "All the statements are correct; none is incorrect."
  },
  {
    "question": "Which statement is incorrect?",
    "answers": [
      {"text": "X-rays travel at the speed of sound.", "correct": true},
      {"text": "X-rays have no charge.", "correct": false},
      {"text": "X-rays cannot be focused to a point.", "correct": false},
      {"text": "X-rays cause ionization.", "correct": false}
    ],
    "explanation": "X-rays travel at the speed of light, not the speed of sound."
  },
  {
    "question": "Which statement is correct?",
    "answers": [
      {"text": "X-rays are a form of electromagnetic radiation; visible light is not.", "correct": false},
      {"text": "X-rays have more energy than does visible light.", "correct": true},
      {"text": "X-rays have a longer wavelength than does visible light.", "correct": false},
      {"text": "X-rays travel more slowly than does visible light.", "correct": false}
    ],
    "explanation": "X-rays have more energy and shorter wavelengths than visible light, and both travel at the speed of light."
  },
  
  {
    "question": "Which regulates the flow of electrical current to the filament of the x-ray tube?",
    "answers": [
      {"text": "high-voltage circuit", "correct": false},
      {"text": "low-voltage circuit", "correct": true},
      {"text": "high-voltage transformer", "correct": false},
      {"text": "low-voltage transformer", "correct": false}
    ],
    "explanation": "The low-voltage circuit regulates the flow of electrical current to the filament of the x-ray tube."
  },
  {
    "question": "Which is used to increase the voltage in the high voltage circuit?",
    "answers": [
      {"text": "step-up transformer", "correct": true},
      {"text": "step-down transformer", "correct": false},
      {"text": "autotransformer", "correct": false},
      {"text": "step-up circuit", "correct": false}
    ],
    "explanation": "A step-up transformer is used to increase the voltage in the high voltage circuit."
  },
  {
    "question": "Which does not occur when the high-voltage circuit is activated?",
    "answers": [
      {"text": "The unit produces an audible and visible signal.", "correct": false},
      {"text": "Electrons produced at the cathode are accelerated across the tube to the anode.", "correct": false},
      {"text": "X-rays travel from the filament to the target.", "correct": true},
      {"text": "Heat is produced.", "correct": false}
    ],
    "explanation": "X-rays do not travel from the filament to the target; electrons do. The filament produces electrons which are then accelerated to the target (anode) where x-rays are produced."
  },
  {
    "question": "Which is the location where x-rays are produced?",
    "answers": [
      {"text": "positive cathode", "correct": false},
      {"text": "positive anode", "correct": true},
      {"text": "negative cathode", "correct": false},
      {"text": "negative anode", "correct": false}
    ],
    "explanation": "X-rays are produced at the positive anode where electrons collide with the target."
  },
  {
    "question": "Which is the location where thermionic emission occurs?",
    "answers": [
      {"text": "positive cathode", "correct": false},
      {"text": "positive anode", "correct": false},
      {"text": "negative cathode", "correct": true},
      {"text": "negative anode", "correct": false}
    ],
    "explanation": "Thermionic emission occurs at the negative cathode where electrons are emitted from the heated filament."
  },
  {
    "question": "Which accounts for 70% of all the x-ray energy produced at the anode?",
    "answers": [
      {"text": "general radiation", "correct": true},
      {"text": "characteristic radiation", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "coherent scatter", "correct": false}
    ],
    "explanation": "General radiation (bremsstrahlung) accounts for about 70% of the x-ray energy produced at the anode."
  },
  {
    "question": "Which occurs only at 70 kV or higher and accounts for a very small part of the x-rays produced in the dental x-ray machine?",
    "answers": [
      {"text": "general radiation", "correct": false},
      {"text": "characteristic radiation", "correct": true},
      {"text": "Compton scatter", "correct": false},
      {"text": "coherent scatter", "correct": false}
    ],
    "explanation": "Characteristic radiation occurs only at 70 kV or higher and represents a small portion of the x-rays produced."
  },
  {
    "question": "Which describes primary radiation?",
    "answers": [
      {"text": "radiation that exits the tubehead", "correct": true},
      {"text": "radiation that is created when x-rays come in contact with matter", "correct": false},
      {"text": "radiation that has been deflected from its path by the interaction with matter", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Primary radiation is the radiation that exits the tubehead directly from the x-ray source."
  },
  {
    "question": "Which describes scatter radiation?",
    "answers": [
      {"text": "radiation that exits the tubehead", "correct": false},
      {"text": "radiation that is more penetrating than primary radiation", "correct": false},
      {"text": "radiation that has been deflected from its path by interaction with matter", "correct": true},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Scatter radiation is radiation that has been deflected from its original path due to interaction with matter."
  },
  {
    "question": "Which type of scatter occurs most often with dental x-rays?",
    "answers": [
      {"text": "Compton", "correct": true},
      {"text": "coherent", "correct": false},
      {"text": "photoelectric", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Compton scatter is the most common type of scatter radiation with dental x-rays."
  },
  
  {
    "question": "A dental radiographer explains that most x-rays produced in the x-ray tube arise from electrons slowing down as they interact with the tungsten target. Which mechanism is being described?",
    "answers": [
      {"text": "Characteristic radiation", "correct": false},
      {"text": "General (braking) radiation", "correct": true},
      {"text": "Scatter radiation", "correct": false},
      {"text": "Secondary radiation", "correct": false},
      {"text": "Photoelectric radiation", "correct": false}
    ],
    "explanation": "General (braking) radiation, also known as bremsstrahlung radiation, is produced when high-speed electrons are decelerated upon interaction with the tungsten nucleus. This accounts for approximately 70% of x-rays produced. The term “braking” refers to the sudden slowing of electrons."
  },
  {
    "question": "A high-speed electron directly collides with the nucleus of a tungsten atom in the anode. What is the result of this interaction?",
    "answers": [
      {"text": "Production of a low-energy x-ray photon", "correct": false},
      {"text": "Production of a high-energy x-ray photon", "correct": true},
      {"text": "No x-ray production occurs", "correct": false},
      {"text": "Emission of scatter radiation", "correct": false},
      {"text": "Production of secondary radiation", "correct": false}
    ],
    "explanation": "When an electron directly hits the nucleus, all of its kinetic energy is converted into a high-energy x-ray photon. This is a rare event but produces the highest-energy photons."
  },
  {
    "question": "During x-ray production, most electrons pass near the nucleus rather than striking it directly. What is the consequence of this interaction?",
    "answers": [
      {"text": "No x-ray photon is produced", "correct": false},
      {"text": "A high-energy photon is always produced", "correct": false},
      {"text": "A lower-energy x-ray photon is produced", "correct": true},
      {"text": "Characteristic radiation is produced", "correct": false},
      {"text": "Scatter radiation is produced", "correct": false}
    ],
    "explanation": "When electrons pass close to the nucleus, they are attracted and slowed down, resulting in partial energy loss and production of lower-energy x-rays, contributing to a spectrum of energies."
  },
  {
    "question": "Which statement best describes the nature of general (braking) radiation?",
    "answers": [
      {"text": "It produces x-rays of uniform energy", "correct": false},
      {"text": "It produces x-rays of varying energies and wavelengths", "correct": true},
      {"text": "It occurs only above 70 kV", "correct": false},
      {"text": "It involves inner-shell electron displacement", "correct": false},
      {"text": "It accounts for a very small fraction of x-rays", "correct": false}
    ],
    "explanation": "Because electrons lose energy in varying amounts during multiple interactions, general radiation results in a continuous spectrum of x-ray energies and wavelengths."
  },
  {
    "question": "A dental x-ray machine is operating at 65 kV. Which type of radiation is least likely to be produced?",
    "answers": [
      {"text": "General radiation", "correct": false},
      {"text": "Primary radiation", "correct": false},
      {"text": "Secondary radiation", "correct": false},
      {"text": "Scatter radiation", "correct": false},
      {"text": "Characteristic radiation", "correct": true}
    ],
    "explanation": "Characteristic radiation requires at least 70 kV to eject a K-shell electron from tungsten. At 65 kV, this threshold is not met, so characteristic radiation is unlikely."
  },
  {
    "question": "A high-speed electron ejects an inner-shell electron from a tungsten atom. What process occurs next to produce an x-ray photon?",
    "answers": [
      {"text": "Electron annihilation", "correct": false},
      {"text": "Nuclear fission", "correct": false},
      {"text": "Electron rearrangement in outer shells", "correct": true},
      {"text": "Photon scattering", "correct": false},
      {"text": "Thermal emission", "correct": false}
    ],
    "explanation": "After an inner-shell electron is removed, outer-shell electrons fall into the vacancy, releasing energy in the form of an x-ray photon, which is characteristic radiation."
  },
  {
    "question": "Which type of radiation accounts for only a small portion of x-rays produced in dental radiography?",
    "answers": [
      {"text": "General radiation", "correct": false},
      {"text": "Primary radiation", "correct": false},
      {"text": "Characteristic radiation", "correct": true},
      {"text": "Secondary radiation", "correct": false},
      {"text": "Scatter radiation", "correct": false}
    ],
    "explanation": "Characteristic radiation contributes only a small fraction compared to general radiation, which dominates x-ray production."
  },
  {
    "question": "A clinician refers to the “useful beam” in dental radiography. What does this term describe?",
    "answers": [
      {"text": "Scatter radiation", "correct": false},
      {"text": "Secondary radiation", "correct": false},
      {"text": "Characteristic radiation", "correct": false},
      {"text": "Primary radiation", "correct": true},
      {"text": "Leakage radiation", "correct": false}
    ],
    "explanation": "Primary radiation is the beam that exits the tubehead and is used for imaging, hence called the useful beam."
  },
  {
    "question": "An x-ray beam interacts with a patient’s tissues and produces radiation that is less penetrating than the original beam. What is this called?",
    "answers": [
      {"text": "Primary radiation", "correct": false},
      {"text": "Characteristic radiation", "correct": false},
      {"text": "General radiation", "correct": false},
      {"text": "Secondary radiation", "correct": true},
      {"text": "Leakage radiation", "correct": false}
    ],
    "explanation": "Secondary radiation is produced when the primary beam interacts with matter, such as tissues, and is less penetrating."
  },
  {
    "question": "During a dental procedure, radiation is deflected in multiple directions after interacting with the patient’s tissues. What type of radiation is this?",
    "answers": [
      {"text": "Primary radiation", "correct": false},
      {"text": "General radiation", "correct": false},
      {"text": "Characteristic radiation", "correct": false},
      {"text": "Scatter radiation", "correct": true},
      {"text": "Leakage radiation", "correct": false}
    ],
    "explanation": "Scatter radiation is a type of secondary radiation that is deflected in all directions, posing risks to both patient and operator."
  },
  {
    "question": "Which statement best explains why scatter radiation is considered hazardous?",
    "answers": [
      {"text": "It has the highest energy among all x-rays", "correct": false},
      {"text": "It travels only in one direction", "correct": false},
      {"text": "It increases image contrast", "correct": false},
      {"text": "It exposes both patient and operator unnecessarily", "correct": true},
      {"text": "It replaces primary radiation", "correct": false}
    ],
    "explanation": "Scatter radiation spreads in all directions, leading to unnecessary radiation exposure and is therefore harmful."
  },
  {
    "question": "A student states that all x-rays produced in the tube have the same energy and wavelength. What is the best correction?",
    "answers": [
      {"text": "Only characteristic radiation varies", "correct": false},
      {"text": "Only scatter radiation varies", "correct": false},
      {"text": "X-rays vary depending on electron interactions with tungsten", "correct": true},
      {"text": "Energy is constant but wavelength varies", "correct": false},
      {"text": "Wavelength is constant but energy varies", "correct": false}
    ],
    "explanation": "The energy and wavelength of x-rays differ because of different types of interactions between electrons and tungsten atoms (general vs characteristic radiation)."
  },
  
  {
    "question": "After exiting the tubehead, an x-ray photon passes through a patient without interacting with any atoms. What is the significance of this event in dental radiography?",
    "answers": [
      {"text": "It increases patient dose", "correct": false},
      {"text": "It produces scatter radiation", "correct": false},
      {"text": "It contributes to image formation", "correct": true},
      {"text": "It causes ionization", "correct": false},
      {"text": "It results in absorption", "correct": false}
    ],
    "explanation": "X-ray photons that pass through tissues without interaction reach the receptor and create image densities, making radiographic imaging possible. No ionization or energy transfer occurs."
  },
  {
    "question": "Which of the following represents the possible outcomes when x-ray photons interact with matter at the atomic level?",
    "answers": [
      {"text": "Refraction, reflection, diffraction, absorption", "correct": false},
      {"text": "No interaction, photoelectric effect, Compton scatter, coherent scatter", "correct": true},
      {"text": "Absorption, emission, transmission, attenuation", "correct": false},
      {"text": "Ionization, excitation, emission, scattering", "correct": false},
      {"text": "Transmission, absorption, reflection, refraction", "correct": false}
    ],
    "explanation": "The four fundamental atomic-level interactions are: no interaction, photoelectric effect (absorption), Compton scatter, and coherent scatter."
  },
  {
    "question": "An x-ray photon collides with a tightly bound inner-shell electron, ejecting it from orbit and disappearing completely. What process is described?",
    "answers": [
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Photoelectric effect", "correct": true},
      {"text": "Secondary radiation", "correct": false},
      {"text": "No interaction", "correct": false}
    ],
    "explanation": "In the photoelectric effect, the photon transfers all its energy to an inner-shell electron, ejecting it (photoelectron), and ceases to exist, resulting in ionization."
  },
  {
    "question": "Which statement best describes absorption of x-rays in tissues?",
    "answers": [
      {"text": "Partial transfer of energy with photon continuation", "correct": false},
      {"text": "Total transfer of photon energy to tissue atoms", "correct": true},
      {"text": "Deflection of photons without energy loss", "correct": false},
      {"text": "Emission of identical photons", "correct": false},
      {"text": "Reflection of photons from tissue surfaces", "correct": false}
    ],
    "explanation": "Absorption involves complete transfer of energy from the photon to tissue atoms, typically via the photoelectric effect."
  },
  {
    "question": "A dental radiograph shows increased radiopacity due to interactions where photons are completely absorbed. Which process is primarily responsible?",
    "answers": [
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Photoelectric effect", "correct": true},
      {"text": "Secondary radiation", "correct": false},
      {"text": "No interaction", "correct": false}
    ],
    "explanation": "The photoelectric effect results in complete absorption of photons, contributing to radiopaque areas on the image."
  },
  {
    "question": "An x-ray photon interacts with a loosely bound outer-shell electron, ejects it, and continues in a different direction with reduced energy. What is this interaction?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": true},
      {"text": "Primary radiation", "correct": false},
      {"text": "No interaction", "correct": false}
    ],
    "explanation": "In Compton scatter, the photon loses part of its energy, ejects an outer-shell electron (Compton electron), and is deflected in a new direction."
  },
  {
    "question": "Which type of interaction accounts for the majority of scatter radiation in diagnostic radiography?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": true},
      {"text": "Primary radiation", "correct": false},
      {"text": "No interaction", "correct": false}
    ],
    "explanation": "Compton scatter accounts for about 62% of scatter radiation, making it the most significant contributor to scatter in diagnostic imaging."
  },
  {
    "question": "A scattered photon changes direction but retains the same energy and does not cause ionization. What type of interaction is this?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Coherent scatter", "correct": true},
      {"text": "Secondary radiation", "correct": false},
      {"text": "Absorption", "correct": false}
    ],
    "explanation": "Coherent scatter involves no energy loss and no ionization. The photon is simply redirected."
  },
  {
    "question": "Which interaction produces a positively charged atom and a negatively charged ejected electron, while the photon continues with reduced energy?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": true},
      {"text": "No interaction", "correct": false},
      {"text": "Primary radiation", "correct": false}
    ],
    "explanation": "Compton scatter results in ionization, producing a Compton (recoil) electron and a positively charged atom, while the photon continues with less energy."
  },
  {
    "question": "Which interaction is responsible for approximately 30% of dental x-ray beam interactions with matter?",
    "answers": [
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Photoelectric effect", "correct": true},
      {"text": "No interaction", "correct": false},
      {"text": "Secondary radiation", "correct": false}
    ],
    "explanation": "The photoelectric effect accounts for about 30% of interactions and is critical for image contrast."
  },
  {
    "question": "Which interaction involves low-energy photons and results in no ionization?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Coherent scatter", "correct": true},
      {"text": "Absorption", "correct": false},
      {"text": "Primary radiation", "correct": false}
    ],
    "explanation": "Coherent scatter occurs with low-energy photons, causing no ionization and no energy loss—only a change in direction."
  },
  {
    "question": "A clinician notes that an x-ray photon ejects an electron but continues traveling with less energy, interacting further until all energy is lost. What type of electron is initially ejected?",
    "answers": [
      {"text": "Photoelectron", "correct": false},
      {"text": "Auger electron", "correct": false},
      {"text": "Compton (recoil) electron", "correct": true},
      {"text": "Beta particle", "correct": false},
      {"text": "Positron", "correct": false}
    ],
    "explanation": "In Compton scatter, the ejected electron is called a Compton or recoil electron, and the photon continues with reduced energy."
  },
  {
    "question": "Which statement correctly differentiates photoelectric effect from Compton scatter?",
    "answers": [
      {"text": "Photoelectric effect involves partial energy loss", "correct": false},
      {"text": "Compton scatter involves total absorption of photon", "correct": false},
      {"text": "Photoelectric effect results in photon disappearance", "correct": true},
      {"text": "Compton scatter occurs only with inner-shell electrons", "correct": false},
      {"text": "Photoelectric effect produces scattered photons", "correct": false}
    ],
    "explanation": "In the photoelectric effect, the photon is completely absorbed and disappears, unlike Compton scatter where it continues."
  },
  {
    "question": "Which interaction contributes most to unnecessary radiation exposure to surrounding tissues?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "No interaction", "correct": false},
      {"text": "Coherent scatter", "correct": false},
      {"text": "Compton scatter", "correct": true},
      {"text": "Primary radiation", "correct": false}
    ],
    "explanation": "Compton scatter produces deflected photons that travel in different directions, contributing to unnecessary exposure."
  },
  {
    "question": "Which interaction accounts for approximately 8% of dental x-ray beam interactions?",
    "answers": [
      {"text": "Photoelectric effect", "correct": false},
      {"text": "Compton scatter", "correct": false},
      {"text": "Coherent scatter", "correct": true},
      {"text": "No interaction", "correct": false},
      {"text": "Primary radiation", "correct": false}
    ],
    "explanation": "Coherent scatter accounts for about 8% of interactions and is considered less significant compared to Compton and photoelectric effects."
  },
  // Chapter 3 Radiation Characteristics
  
  {
    "question": "A dentist increases the kilovoltage (kV) setting while keeping all other exposure factors constant. What is the expected effect on the radiographic image?",
    "answers": [
      {"text": "Image becomes lighter with less density", "correct": false},
      {"text": "Image becomes darker with increased density", "correct": true},
      {"text": "No change in image density", "correct": false},
      {"text": "Image shows increased noise only", "correct": false},
      {"text": "Image becomes more blurred", "correct": false}
    ],
    "explanation": "Increasing kV increases the energy and penetrating ability of x-rays, resulting in greater density (darkness) on the image when other factors remain constant."
  },
  {
    "question": "Which factor primarily determines the penetrating ability of an x-ray beam?",
    "answers": [
      {"text": "Milliamperage", "correct": false},
      {"text": "Exposure time", "correct": false},
      {"text": "Wavelength", "correct": true},
      {"text": "Filtration", "correct": false},
      {"text": "Collimation", "correct": false}
    ],
    "explanation": "Wavelength determines energy and penetration. Shorter wavelengths correspond to higher energy and greater penetrating power."
  },
  {
    "question": "A patient with dense mandibular bone requires imaging. Which adjustment is most appropriate to ensure adequate penetration?",
    "answers": [
      {"text": "Decrease kilovoltage", "correct": false},
      {"text": "Increase kilovoltage", "correct": true},
      {"text": "Decrease exposure time", "correct": false},
      {"text": "Decrease milliamperage", "correct": false},
      {"text": "Increase filtration", "correct": false}
    ],
    "explanation": "Dense tissues require higher kV to produce more penetrating x-rays capable of passing through thicker structures."
  },
  {
    "question": "Which statement best describes the relationship between wavelength and x-ray penetration?",
    "answers": [
      {"text": "Longer wavelength increases penetration", "correct": false},
      {"text": "Shorter wavelength decreases energy", "correct": false},
      {"text": "Shorter wavelength increases penetration", "correct": true},
      {"text": "Wavelength has no effect on penetration", "correct": false},
      {"text": "Longer wavelength produces higher energy", "correct": false}
    ],
    "explanation": "Shorter wavelength corresponds to higher energy, resulting in greater penetrating ability."
  },
  {
    "question": "Voltage in a dental x-ray machine primarily influences which of the following?",
    "answers": [
      {"text": "Number of electrons produced", "correct": false},
      {"text": "Speed of electrons traveling from cathode to anode", "correct": true},
      {"text": "Amount of scatter radiation", "correct": false},
      {"text": "Thickness of the image receptor", "correct": false},
      {"text": "Shape of the x-ray beam", "correct": false}
    ],
    "explanation": "Voltage determines the force that accelerates electrons, thus controlling their speed and kinetic energy."
  },
  {
    "question": "An increase in kilovoltage results in which of the following changes in the x-ray beam?",
    "answers": [
      {"text": "Lower energy and longer wavelength", "correct": false},
      {"text": "Higher energy and shorter wavelength", "correct": true},
      {"text": "No change in energy", "correct": false},
      {"text": "Lower penetration and increased absorption", "correct": false},
      {"text": "Increased scatter only", "correct": false}
    ],
    "explanation": "Higher kV produces faster electrons, leading to higher-energy x-rays with shorter wavelengths."
  },
  {
    "question": "What is the unit used to measure the electrical force that drives electrons in an x-ray tube?",
    "answers": [
      {"text": "Ampere", "correct": false},
      {"text": "Ohm", "correct": false},
      {"text": "Volt", "correct": true},
      {"text": "Watt", "correct": false},
      {"text": "Joule", "correct": false}
    ],
    "explanation": "Voltage is measured in volts (V), representing the electrical potential difference driving electron movement."
  },
  {
    "question": "Which statement best defines kilovoltage (kV) in dental radiography?",
    "answers": [
      {"text": "Number of electrons produced per second", "correct": false},
      {"text": "Peak voltage applied across the x-ray tube", "correct": true},
      {"text": "Total exposure time", "correct": false},
      {"text": "Amount of heat generated at the anode", "correct": false},
      {"text": "Intensity of scatter radiation", "correct": false}
    ],
    "explanation": "Kilovoltage refers to the maximum (peak) voltage applied, determining electron energy and x-ray beam quality."
  },
  {
    "question": "A radiograph appears too light. Which adjustment would correct this issue if all other factors remain constant?",
    "answers": [
      {"text": "Decrease kilovoltage", "correct": false},
      {"text": "Increase kilovoltage", "correct": true},
      {"text": "Decrease exposure time", "correct": false},
      {"text": "Decrease milliamperage", "correct": false},
      {"text": "Increase filtration", "correct": false}
    ],
    "explanation": "Increasing kV increases beam penetration and image density, making the image darker."
  },
  {
    "question": "Which characteristic of the x-ray beam is described as its mean energy and penetrating ability?",
    "answers": [
      {"text": "Intensity", "correct": false},
      {"text": "Quantity", "correct": false},
      {"text": "Quality", "correct": true},
      {"text": "Density", "correct": false},
      {"text": "Contrast", "correct": false}
    ],
    "explanation": "X-ray beam quality refers to mean energy and penetrating ability, determined by kilovoltage."
  },
  {
    "question": "Which of the following best explains why increasing kV results in a darker image?",
    "answers": [
      {"text": "Increased number of photons produced", "correct": false},
      {"text": "Increased penetration allows more photons to reach the receptor", "correct": true},
      {"text": "Decreased wavelength reduces scatter", "correct": false},
      {"text": "Increased absorption by tissues", "correct": false},
      {"text": "Reduced electron speed", "correct": false}
    ],
    "explanation": "Higher kV increases penetration, allowing more photons to pass through tissues and reach the receptor, increasing image density."
  },
  {
    "question": "Modern intraoral x-ray units typically operate within which kilovoltage range?",
    "answers": [
      {"text": "40–50 kV", "correct": false},
      {"text": "50–60 kV", "correct": false},
      {"text": "60–70 kV", "correct": true},
      {"text": "70–90 kV", "correct": false},
      {"text": "90–120 kV", "correct": false}
    ],
    "explanation": "Current intraoral units commonly operate between 60 and 70 kV, or have a fixed setting at 70 kV."
  },
  {
    "question": "Which scenario best demonstrates the effect of decreasing kilovoltage?",
    "answers": [
      {"text": "Increased image density and darker image", "correct": false},
      {"text": "Decreased image density and lighter image", "correct": true},
      {"text": "No change in image appearance", "correct": false},
      {"text": "Increased scatter radiation only", "correct": false},
      {"text": "Increased penetration", "correct": false}
    ],
    "explanation": "Lower kV produces less penetrating x-rays, resulting in less exposure to the receptor and a lighter image."
  },
  {
    "question": "A dental x-ray unit is set at 1 kV. How many volts does this represent?",
    "answers": [
      {"text": "10 volts", "correct": false},
      {"text": "100 volts", "correct": false},
      {"text": "1000 volts", "correct": true},
      {"text": "10,000 volts", "correct": false},
      {"text": "100,000 volts", "correct": false}
    ],
    "explanation": "1 kilovolt (kV) = 1000 volts, the standard unit used in dental radiography."
  },
  {
    "question": "In digital radiography, how can image density be adjusted without changing exposure factors?",
    "answers": [
      {"text": "By altering kilovoltage", "correct": false},
      {"text": "By changing milliamperage", "correct": false},
      {"text": "Using image enhancement software", "correct": true},
      {"text": "Increasing exposure time", "correct": false},
      {"text": "Adjusting filtration", "correct": false}
    ],
    "explanation": "Digital systems allow post-processing adjustments, such as brightness changes, without modifying exposure parameters."
  },

  {
    "question": "A dentist lowers the kilovoltage setting when taking a bitewing radiograph to evaluate early carious lesions. What is the expected effect on the image?",
    "answers": [
      {"text": "Low contrast with many shades of gray", "correct": false},
      {"text": "High contrast with distinct black and white areas", "correct": true},
      {"text": "Increased image density only", "correct": false},
      {"text": "Decreased image sharpness", "correct": false},
      {"text": "No change in image appearance", "correct": false}
    ],
    "explanation": "Lower kV produces high-contrast images, characterized by more black and white areas and fewer grays, ideal for detecting dental caries."
  },
  {
    "question": "Which type of image contrast is most useful for detecting periodontal or periapical disease?",
    "answers": [
      {"text": "High contrast with minimal gray shades", "correct": false},
      {"text": "Low contrast with many shades of gray", "correct": true},
      {"text": "No contrast variation", "correct": false},
      {"text": "Extremely dark images", "correct": false},
      {"text": "Extremely light images", "correct": false}
    ],
    "explanation": "Higher kV produces low contrast, which provides more gray shades, useful for evaluating subtle differences in bone and soft tissues."
  },
  {
    "question": "A radiograph appears too dark. Which exposure factor is most appropriate to adjust according to standard practice?",
    "answers": [
      {"text": "Kilovoltage", "correct": false},
      {"text": "Milliamperage", "correct": false},
      {"text": "Exposure time", "correct": true},
      {"text": "Filtration", "correct": false},
      {"text": "Collimation", "correct": false}
    ],
    "explanation": "The timer (exposure time) is the primary factor adjusted to control image density (lightness or darkness)."
  },
  {
    "question": "Which statement best describes exposure time in dental radiography?",
    "answers": [
      {"text": "Controls the energy of x-rays", "correct": false},
      {"text": "Controls the number of electrons produced", "correct": false},
      {"text": "Determines how long x-rays are emitted", "correct": true},
      {"text": "Determines the wavelength of x-rays", "correct": false},
      {"text": "Controls beam penetration", "correct": false}
    ],
    "explanation": "Exposure time is the duration of x-ray production, directly affecting the number of x-rays and image density."
  },
  {
    "question": "A larger patient requires adjustment of exposure factors. Which is the most appropriate modification?",
    "answers": [
      {"text": "Decrease exposure time", "correct": false},
      {"text": "Increase exposure time", "correct": true},
      {"text": "Decrease milliamperage", "correct": false},
      {"text": "Decrease kilovoltage", "correct": false},
      {"text": "Reduce beam quality", "correct": false}
    ],
    "explanation": "Larger patients require longer exposure time to ensure sufficient x-rays reach the receptor."
  },
  {
    "question": "Which statement best describes the relationship between kilovoltage and exposure time?",
    "answers": [
      {"text": "They increase together", "correct": false},
      {"text": "They are unrelated", "correct": false},
      {"text": "They are inversely related", "correct": true},
      {"text": "They are directly proportional only at high values", "correct": false},
      {"text": "They affect only image contrast", "correct": false}
    ],
    "explanation": "When kV increases, exposure time is typically decreased, and vice versa, to maintain proper image density."
  },
  {
    "question": "An x-ray machine produces radiation in bursts rather than continuously. What is the term for each burst?",
    "answers": [
      {"text": "Pulse wave", "correct": false},
      {"text": "Impulse", "correct": true},
      {"text": "Cycle", "correct": false},
      {"text": "Frequency unit", "correct": false},
      {"text": "Emission packet", "correct": false}
    ],
    "explanation": "An impulse is a burst of x-rays; 60 impulses occur per second, meaning each impulse lasts 1/60 second."
  },
  {
    "question": "Which factor controls the quantity of x-rays produced in a dental x-ray unit?",
    "answers": [
      {"text": "Kilovoltage", "correct": false},
      {"text": "Exposure time", "correct": false},
      {"text": "Milliamperage", "correct": true},
      {"text": "Filtration", "correct": false},
      {"text": "Wavelength", "correct": false}
    ],
    "explanation": "Milliamperage (mA) controls the number of electrons and thus the quantity of x-rays produced."
  },
  {
    "question": "An increase in milliamperage will result in which of the following?",
    "answers": [
      {"text": "Decreased number of electrons", "correct": false},
      {"text": "Increased wavelength", "correct": false},
      {"text": "Increased number of x-rays produced", "correct": true},
      {"text": "Decreased image density", "correct": false},
      {"text": "Reduced cathode temperature", "correct": false}
    ],
    "explanation": "Higher mA increases electron flow, leading to more x-rays and greater beam quantity."
  },
  {
    "question": "Which statement best explains how milliamperage affects the x-ray tube?",
    "answers": [
      {"text": "It changes photon energy", "correct": false},
      {"text": "It controls exposure duration", "correct": false},
      {"text": "It regulates cathode filament temperature", "correct": true},
      {"text": "It determines beam penetration", "correct": false},
      {"text": "It alters wavelength", "correct": false}
    ],
    "explanation": "Milliamperage increases filament temperature, producing more electrons and increasing x-ray quantity."
  },
  {
    "question": "If milliamperage is increased from 7 mA to 15 mA, what is the approximate effect on x-ray production?",
    "answers": [
      {"text": "No change", "correct": false},
      {"text": "Slight increase", "correct": false},
      {"text": "Double the number of x-rays", "correct": true},
      {"text": "Half the number of x-rays", "correct": false},
      {"text": "Only energy increases", "correct": false}
    ],
    "explanation": "Increasing mA roughly doubles electron flow, resulting in approximately twice as many x-rays."
  },
  {
    "question": "Which unit is used to measure the flow of electrical current in an x-ray machine?",
    "answers": [
      {"text": "Volt", "correct": false},
      {"text": "Ohm", "correct": false},
      {"text": "Ampere", "correct": true},
      {"text": "Watt", "correct": false},
      {"text": "Joule", "correct": false}
    ],
    "explanation": "The ampere (A) measures electron flow (current); in dental radiography, it is expressed as milliamperes (mA)."
  },
  {
    "question": "A radiograph shows excessive gray shades with poor differentiation between structures. What is the most likely cause?",
    "answers": [
      {"text": "Low kilovoltage", "correct": false},
      {"text": "High kilovoltage", "correct": true},
      {"text": "Low exposure time", "correct": false},
      {"text": "Low milliamperage", "correct": false},
      {"text": "High filtration", "correct": false}
    ],
    "explanation": "High kV produces low contrast, resulting in many gray shades and reduced differentiation."
  },
  {
    "question": "Which exposure factor primarily affects image contrast?",
    "answers": [
      {"text": "Milliamperage", "correct": false},
      {"text": "Exposure time", "correct": false},
      {"text": "Kilovoltage", "correct": true},
      {"text": "Filtration", "correct": false},
      {"text": "Collimation", "correct": false}
    ],
    "explanation": "Kilovoltage controls contrast: Low kV → high contrast; High kV → low contrast."
  },
  {
    "question": "Which scenario best demonstrates increased x-ray beam quantity?",
    "answers": [
      {"text": "Increasing kV from 60 to 70", "correct": false},
      {"text": "Increasing mA from 7 to 15", "correct": true},
      {"text": "Decreasing exposure time", "correct": false},
      {"text": "Lowering wavelength", "correct": false},
      {"text": "Increasing contrast", "correct": false}
    ],
    "explanation": "Beam quantity depends on mA. Increasing mA increases the number of x-rays produced, not their energy."
  },
  
  {
    "question": "In dental imaging, the quality of the x-ray beam is controlled by:",
    "answers": [
      {"text": "kilovoltage", "correct": true},
      {"text": "milliamperage", "correct": false},
      {"text": "exposure time", "correct": false},
      {"text": "source-to-receptor distance", "correct": false}
    ],
    "explanation": "Kilovoltage controls the quality (energy and penetrating ability) of the x-ray beam."
  },
  {
    "question": "Identify the kilovoltage range for current dental x-ray machines:",
    "answers": [
      {"text": "50 to 60 kV", "correct": false},
      {"text": "60 to 70 kV", "correct": true},
      {"text": "70 to 100 kV", "correct": false},
      {"text": "greater than 100 kV", "correct": false}
    ],
    "explanation": "Current dental x-ray machines typically operate within the 60 to 70 kV range."
  },
  {
    "question": "A higher kilovoltage produces x-rays with:",
    "answers": [
      {"text": "greater energy levels", "correct": false},
      {"text": "shorter wavelengths", "correct": false},
      {"text": "more penetrating ability", "correct": false},
      {"text": "all of the above", "correct": true}
    ],
    "explanation": "Higher kilovoltage results in x-rays with greater energy, shorter wavelengths, and more penetrating ability."
  },
  {
    "question": "Identify the unit of measurement used to describe the amount of electric current flowing through the x-ray tube:",
    "answers": [
      {"text": "volt", "correct": false},
      {"text": "ampere", "correct": true},
      {"text": "kilovoltage", "correct": false},
      {"text": "force", "correct": false}
    ],
    "explanation": "The ampere is the unit used to measure electric current flowing through the x-ray tube."
  },
  {
    "question": "Radiation produced with high kilovoltage results in:",
    "answers": [
      {"text": "short wavelengths", "correct": true},
      {"text": "long wavelengths", "correct": false},
      {"text": "less penetrating radiation", "correct": false},
      {"text": "lower energy levels", "correct": false}
    ],
    "explanation": "High kilovoltage produces radiation with short wavelengths, which are more penetrating and higher in energy."
  },
  {
    "question": "In dental imaging, the quantity of radiation produced is controlled by:",
    "answers": [
      {"text": "kilovoltage", "correct": false},
      {"text": "milliamperage", "correct": false},
      {"text": "exposure time", "correct": false},
      {"text": "both b and c", "correct": true}
    ],
    "explanation": "Quantity of radiation is controlled by both milliamperage and exposure time."
  },
  {
    "question": "Increasing milliamperage results in an increase in:",
    "answers": [
      {"text": "temperature of the filament", "correct": false},
      {"text": "mean energy of the beam", "correct": false},
      {"text": "number of x-rays produced", "correct": false},
      {"text": "both a and c", "correct": true}
    ],
    "explanation": "Increasing milliamperage raises filament temperature and increases the number of x-rays produced."
  },
  {
    "question": "Identify the milliamperage range used for current dental x-ray machines:",
    "answers": [
      {"text": "1 to 5 mA", "correct": false},
      {"text": "6 to 8 mA", "correct": true},
      {"text": "9 to 15 mA", "correct": false},
      {"text": "greater than 15 mA", "correct": false}
    ],
    "explanation": "Current dental x-ray machines typically use milliamperage in the 6 to 8 mA range."
  },
  {
    "question": "The overall blackness or darkness of an image is termed:",
    "answers": [
      {"text": "contrast", "correct": false},
      {"text": "density", "correct": true},
      {"text": "overexposure", "correct": false},
      {"text": "polychromatic", "correct": false}
    ],
    "explanation": "Image density refers to the overall blackness or darkness of a radiograph."
  },
  {
    "question": "If kilovoltage is decreased with no other variations in exposure factors, the resultant image will:",
    "answers": [
      {"text": "appear lighter", "correct": true},
      {"text": "appear darker", "correct": false},
      {"text": "remain the same", "correct": false},
      {"text": "either a or b", "correct": false}
    ],
    "explanation": "Decreasing kilovoltage reduces beam energy and penetration, resulting in a lighter image."
  },
  {
    "question": "Identify the term that describes how dark and light areas are differentiated on an image:",
    "answers": [
      {"text": "contrast", "correct": true},
      {"text": "density", "correct": false},
      {"text": "intensity", "correct": false},
      {"text": "polychromatic", "correct": false}
    ],
    "explanation": "Contrast refers to the differentiation between dark and light areas on a radiographic image."
  },
  {
    "question": "An image that has many light and dark areas with few shades of gray is said to have:",
    "answers": [
      {"text": "high density", "correct": false},
      {"text": "low density", "correct": false},
      {"text": "high contrast", "correct": true},
      {"text": "low contrast", "correct": false}
    ],
    "explanation": "High contrast images have many light and dark areas with few intermediate gray shades."
  },
  {
    "question": "The image described in question 12 was produced with:",
    "answers": [
      {"text": "low kilovoltage", "correct": true},
      {"text": "high kilovoltage", "correct": false},
      {"text": "low milliamperage", "correct": false},
      {"text": "high milliamperage", "correct": false}
    ],
    "explanation": "Low kilovoltage produces high contrast images with distinct light and dark areas."
  },
  {
    "question": "Increasing milliamperage alone results in an image with:",
    "answers": [
      {"text": "high contrast", "correct": false},
      {"text": "low contrast", "correct": false},
      {"text": "increased density", "correct": true},
      {"text": "decreased density", "correct": false}
    ],
    "explanation": "Increasing milliamperage increases the number of x-rays, resulting in increased image density."
  },
  {
    "question": "The total energy contained in the x-ray beam in a specific area at a given time is termed:",
    "answers": [
      {"text": "kilovoltage", "correct": false},
      {"text": "beam quality", "correct": false},
      {"text": "intensity", "correct": true},
      {"text": "milliampere-second", "correct": false}
    ],
    "explanation": "Intensity refers to the total energy contained in the x-ray beam per unit area and time."
  },
  {
    "question": "Increasing which of these four exposure controls will increase the intensity of the x-ray beam: (1) kilovoltage, (2) milliamperage, (3) exposure time, (4) source-to-receptor distance?",
    "answers": [
      {"text": "1 and 2", "correct": false},
      {"text": "2 and 3", "correct": false},
      {"text": "1, 2, and 3", "correct": true},
      {"text": "1, 2, 3, and 4", "correct": false}
    ],
    "explanation": "Kilovoltage, milliamperage, and exposure time increase beam intensity; increasing distance decreases intensity."
  },
  {
    "question": "If the target-receptor distance is doubled, the resultant beam will be:",
    "answers": [
      {"text": "four times as intense", "correct": false},
      {"text": "twice as intense", "correct": false},
      {"text": "half as intense", "correct": false},
      {"text": "one fourth as intense", "correct": true}
    ],
    "explanation": "Doubling the distance reduces beam intensity to one fourth according to the inverse square law."
  },
  {
    "question": "If the target-receptor distance is tripled, the resultant beam will be:",
    "answers": [
      {"text": "one half as intense", "correct": false},
      {"text": "one fourth as intense", "correct": false},
      {"text": "one ninth as intense", "correct": true},
      {"text": "one sixteenth as intense", "correct": false}
    ],
    "explanation": "Tripling the distance reduces beam intensity to one ninth according to the inverse square law."
  },
  {
    "question": "The half-value layer is the amount of:",
    "answers": [
      {"text": "lead that restricts the diameter of the beam by half", "correct": false},
      {"text": "copper needed to cool the anode", "correct": false},
      {"text": "aluminum needed to reduce scatter radiation by half", "correct": false},
      {"text": "aluminum needed to reduce x-ray beam intensity by half", "correct": true}
    ],
    "explanation": "The half-value layer is the thickness of aluminum required to reduce x-ray beam intensity by 50%."
  },
  {
    "question": "If the half-value layer is 3 mm, what thickness of aluminum is necessary to decrease the intensity by half?",
    "answers": [
      {"text": "1.5 mm", "correct": false},
      {"text": "3 mm", "correct": true},
      {"text": "6 mm", "correct": false},
      {"text": "9 mm", "correct": false}
    ],
    "explanation": "By definition, the half-value layer thickness reduces beam intensity by half."
  },
  // Chapter 4: Radiation Biology
  
  {
    "question": "A patient undergoes repeated dental radiographs. Some x-ray photons are absorbed by tissues, leading to cellular damage. What is the primary event that occurs when x-ray energy is absorbed?",
    "answers": [
      {"text": "Reflection of photons", "correct": false},
      {"text": "Scattering without energy transfer", "correct": false},
      {"text": "Chemical changes leading to biologic damage", "correct": true},
      {"text": "Emission of secondary radiation only", "correct": false},
      {"text": "No interaction with tissues", "correct": false}
    ],
    "explanation": "Absorption involves total energy transfer from photons to tissues, causing chemical changes that result in biologic damage."
  },
  {
    "question": "Which two primary mechanisms are responsible for radiation-induced biologic damage?",
    "answers": [
      {"text": "Absorption and transmission", "correct": false},
      {"text": "Ionization and free radical formation", "correct": true},
      {"text": "Reflection and refraction", "correct": false},
      {"text": "Excitation and emission", "correct": false},
      {"text": "Filtration and attenuation", "correct": false}
    ],
    "explanation": "Biologic damage occurs through ionization (direct electron removal) and free radical formation (indirect chemical damage)."
  },
  {
    "question": "An x-ray photon ejects an electron from an atom, leaving the atom positively charged. What process is described?",
    "answers": [
      {"text": "Excitation", "correct": false},
      {"text": "Ionization", "correct": true},
      {"text": "Absorption", "correct": false},
      {"text": "Coherent scatter", "correct": false},
      {"text": "Transmission", "correct": false}
    ],
    "explanation": "Ionization occurs when an electron is removed, producing a positively charged atom and a free electron."
  },
  {
    "question": "Which interaction is most responsible for initiating ionization in dental radiography?",
    "answers": [
      {"text": "Coherent scatter", "correct": false},
      {"text": "Photoelectric effect and Compton scatter", "correct": true},
      {"text": "Transmission only", "correct": false},
      {"text": "Reflection", "correct": false},
      {"text": "Filtration", "correct": false}
    ],
    "explanation": "Both photoelectric effect and Compton scatter produce ionization, leading to tissue damage."
  },
  {
    "question": "A high-speed electron ejected from an atom interacts with surrounding molecules, causing further damage. What is this process called?",
    "answers": [
      {"text": "Secondary ionization", "correct": true},
      {"text": "Coherent scattering", "correct": false},
      {"text": "Refraction", "correct": false},
      {"text": "Recombination", "correct": false},
      {"text": "Attenuation", "correct": false}
    ],
    "explanation": "The ejected electron can cause additional ionizations and molecular disruptions, amplifying cellular damage."
  },
  {
    "question": "Which statement best describes free radicals?",
    "answers": [
      {"text": "Positively charged stable atoms", "correct": false},
      {"text": "Neutral molecules with paired electrons", "correct": false},
      {"text": "Highly reactive molecules with unpaired electrons", "correct": true},
      {"text": "Negatively charged stable ions", "correct": false},
      {"text": "Inert molecules", "correct": false}
    ],
    "explanation": "Free radicals are unstable, highly reactive, and contain an unpaired electron, making them damaging to cells."
  },
  {
    "question": "Free radical formation in cells primarily results from ionization of which substance?",
    "answers": [
      {"text": "Proteins", "correct": false},
      {"text": "Lipids", "correct": false},
      {"text": "DNA", "correct": false},
      {"text": "Water", "correct": true},
      {"text": "Calcium", "correct": false}
    ],
    "explanation": "Cells are mostly water; ionization of water produces hydrogen and hydroxyl free radicals."
  },
  {
    "question": "Which of the following may result from free radical interactions?",
    "answers": [
      {"text": "Stable molecules only", "correct": false},
      {"text": "Formation of toxins such as hydrogen peroxide", "correct": true},
      {"text": "Immediate cell repair", "correct": false},
      {"text": "Decreased chemical reactivity", "correct": false},
      {"text": "No biologic effect", "correct": false}
    ],
    "explanation": "Free radicals can combine to form toxic substances (e.g., H₂O₂), leading to cellular damage."
  },
  {
    "question": "What is the approximate lifetime of a free radical?",
    "answers": [
      {"text": "1 second", "correct": false},
      {"text": "10⁻³ seconds", "correct": false},
      {"text": "10⁻⁶ seconds", "correct": false},
      {"text": "10⁻¹⁰ seconds", "correct": true},
      {"text": "10⁻¹⁵ seconds", "correct": false}
    ],
    "explanation": "Free radicals are extremely short-lived (~10⁻¹⁰ seconds) but highly reactive during that time."
  },
  {
    "question": "A radiographic injury occurs when x-rays directly strike DNA, causing cellular damage. Which theory explains this?",
    "answers": [
      {"text": "Indirect theory", "correct": false},
      {"text": "Free radical theory", "correct": false},
      {"text": "Direct theory", "correct": true},
      {"text": "Compton theory", "correct": false},
      {"text": "Coherent theory", "correct": false}
    ],
    "explanation": "The direct theory states that damage occurs when radiation directly hits critical targets like DNA."
  },
  {
    "question": "Which statement best characterizes direct radiation injury?",
    "answers": [
      {"text": "Occurs frequently due to water content", "correct": false},
      {"text": "Always involves toxin formation", "correct": false},
      {"text": "Results from direct interaction with DNA", "correct": true},
      {"text": "Involves only scatter radiation", "correct": false},
      {"text": "Does not involve ionization", "correct": false}
    ],
    "explanation": "Direct injury occurs when x-rays directly damage critical cellular components, especially DNA."
  },
  {
    "question": "Why is indirect radiation injury more common than direct injury?",
    "answers": [
      {"text": "Cells contain little DNA", "correct": false},
      {"text": "X-rays rarely interact with cells", "correct": false},
      {"text": "Cells have high water content", "correct": true},
      {"text": "Free radicals are stable", "correct": false},
      {"text": "Ionization does not occur", "correct": false}
    ],
    "explanation": "Because cells are mostly water, free radical formation (indirect damage) occurs more frequently."
  },
  {
    "question": "A clinician explains that toxins formed after x-ray exposure damage cells without direct photon interaction. Which mechanism is described?",
    "answers": [
      {"text": "Direct effect", "correct": false},
      {"text": "Coherent scattering", "correct": false},
      {"text": "Indirect effect", "correct": true},
      {"text": "Photoelectric absorption", "correct": false},
      {"text": "Transmission", "correct": false}
    ],
    "explanation": "The indirect theory involves free radical formation and toxin production, not direct photon impact."
  },
  {
    "question": "Which of the following best describes absorption of x-rays in tissue?",
    "answers": [
      {"text": "Partial energy transfer", "correct": false},
      {"text": "No energy transfer", "correct": false},
      {"text": "Total transfer of photon energy", "correct": true},
      {"text": "Reflection of photons", "correct": false},
      {"text": "Scattering without ionization", "correct": false}
    ],
    "explanation": "Absorption involves complete transfer of energy, leading to ionization and biologic damage."
  },
  {
    "question": "Which sequence best describes indirect radiation damage?",
    "answers": [
      {"text": "DNA hit → immediate mutation", "correct": false},
      {"text": "Photon absorption → free radical formation → toxin production → cellular damage", "correct": true},
      {"text": "Photon reflection → no interaction", "correct": false},
      {"text": "Electron recombination → no damage", "correct": false},
      {"text": "Scatter → no ionization", "correct": false}
    ],
    "explanation": "Indirect damage occurs through free radicals, which form toxins that disrupt cellular function."
  },
  {
    "question": "What is the charge of the atom after ionization?",
    "answers": [
      {"text": "Neutral", "correct": false},
      {"text": "Negative", "correct": false},
      {"text": "Positive", "correct": true},
      {"text": "Variable", "correct": false},
      {"text": "No change", "correct": false}
    ],
    "explanation": "Loss of an electron leaves the atom positively charged."
  },
  {
    "question": "Which of the following best explains why ionizing radiation is harmful?",
    "answers": [
      {"text": "It reflects off tissues", "correct": false},
      {"text": "It increases tissue density", "correct": false},
      {"text": "It produces chemical changes in cells", "correct": true},
      {"text": "It decreases electron motion", "correct": false},
      {"text": "It prevents absorption", "correct": false}
    ],
    "explanation": "Ionizing radiation causes chemical alterations in cells, leading to biologic damage."
  },
  {
    "question": "Which outcome is possible when free radicals attempt to stabilize?",
    "answers": [
      {"text": "No reaction occurs", "correct": false},
      {"text": "They always repair cells", "correct": false},
      {"text": "They may recombine or form damaging molecules", "correct": true},
      {"text": "They become permanently stable", "correct": false},
      {"text": "They eliminate toxins", "correct": false}
    ],
    "explanation": "Free radicals may recombine harmlessly or form harmful compounds, depending on interactions."
  },

  {
    "question": "A patient undergoes repeated low-dose dental radiographs over several years and later develops leukemia. Which type of radiation effect best explains this outcome?",
    "answers": [
      {"text": "Nonstochastic effect", "correct": false},
      {"text": "Deterministic effect", "correct": false},
      {"text": "Stochastic effect", "correct": true},
      {"text": "Threshold effect", "correct": false},
      {"text": "Acute radiation syndrome", "correct": false}
    ],
    "explanation": "Stochastic effects involve genetic mutations and include cancer and leukemia. Their probability increases with dose, but severity is not dose-dependent."
  },
  {
    "question": "Which statement best characterizes stochastic radiation effects?",
    "answers": [
      {"text": "They have a threshold dose", "correct": false},
      {"text": "Severity increases with dose", "correct": false},
      {"text": "Probability increases with dose", "correct": true},
      {"text": "They cause immediate tissue damage", "correct": false},
      {"text": "They are always reversible", "correct": false}
    ],
    "explanation": "Stochastic effects are probabilistic: higher dose increases the chance of occurrence, not severity."
  },
  {
    "question": "A patient develops skin erythema after receiving a high radiation dose during therapy. What type of effect is this?",
    "answers": [
      {"text": "Stochastic effect", "correct": false},
      {"text": "Genetic mutation", "correct": false},
      {"text": "Nonstochastic effect", "correct": true},
      {"text": "Latent effect", "correct": false},
      {"text": "Cumulative effect", "correct": false}
    ],
    "explanation": "Nonstochastic (deterministic) effects include skin erythema and occur only after a threshold dose is exceeded, with severity increasing with dose."
  },
  {
    "question": "Which statement best differentiates stochastic from nonstochastic effects?",
    "answers": [
      {"text": "Stochastic effects have a threshold", "correct": false},
      {"text": "Nonstochastic effects have no threshold", "correct": false},
      {"text": "Stochastic severity depends on dose", "correct": false},
      {"text": "Nonstochastic severity increases with dose", "correct": true},
      {"text": "Stochastic effects cause immediate symptoms", "correct": false}
    ],
    "explanation": "Nonstochastic effects show dose-dependent severity, whereas stochastic effects do not."
  },
  {
    "question": "Which of the following conditions is an example of a stochastic effect?",
    "answers": [
      {"text": "Hair loss", "correct": false},
      {"text": "Cataract formation", "correct": false},
      {"text": "Leukemia", "correct": true},
      {"text": "Radiation sickness", "correct": false},
      {"text": "Skin erythema", "correct": false}
    ],
    "explanation": "Leukemia and cancers are classic examples of stochastic effects."
  },
  {
    "question": "Which of the following is an example of a nonstochastic (deterministic) effect?",
    "answers": [
      {"text": "Cancer", "correct": false},
      {"text": "Genetic mutation", "correct": false},
      {"text": "Leukemia", "correct": false},
      {"text": "Cataract formation", "correct": true},
      {"text": "Chromosomal alteration", "correct": false}
    ],
    "explanation": "Cataracts are deterministic effects that occur after a threshold dose and worsen with increasing exposure."
  },
  {
    "question": "A radiologist explains that a certain radiation effect occurs only after a minimum dose is exceeded. What type of effect is this?",
    "answers": [
      {"text": "Stochastic", "correct": false},
      {"text": "Cumulative", "correct": false},
      {"text": "Nonstochastic", "correct": true},
      {"text": "Latent", "correct": false},
      {"text": "Genetic", "correct": false}
    ],
    "explanation": "Nonstochastic effects have a threshold, below which the effect does not occur."
  },
  {
    "question": "What is the latent period in radiation biology?",
    "answers": [
      {"text": "Time between exposures", "correct": false},
      {"text": "Time between exposure and observable effects", "correct": true},
      {"text": "Duration of radiation exposure", "correct": false},
      {"text": "Recovery phase duration", "correct": false},
      {"text": "Time required for ionization", "correct": false}
    ],
    "explanation": "The latent period is the delay between radiation exposure and the appearance of symptoms."
  },
  {
    "question": "Which factor shortens the latent period following radiation exposure?",
    "answers": [
      {"text": "Lower dose", "correct": false},
      {"text": "Slower dose rate", "correct": false},
      {"text": "Higher dose and faster dose rate", "correct": true},
      {"text": "Reduced exposure frequency", "correct": false},
      {"text": "Increased distance", "correct": false}
    ],
    "explanation": "Higher dose and rapid exposure lead to a shorter latent period before symptoms appear."
  },
  {
    "question": "After the latent period, which phase follows in radiation injury?",
    "answers": [
      {"text": "Recovery phase", "correct": false},
      {"text": "Initial exposure phase", "correct": false},
      {"text": "Period of injury", "correct": true},
      {"text": "Healing phase", "correct": false},
      {"text": "Chronic phase", "correct": false}
    ],
    "explanation": "Radiation injury progresses from latent period → period of injury → recovery period."
  },
  {
    "question": "Which statement best describes cumulative radiation effects?",
    "answers": [
      {"text": "Damage is repaired immediately", "correct": false},
      {"text": "Effects decrease over time", "correct": false},
      {"text": "Unrepaired damage accumulates in tissues", "correct": true},
      {"text": "Only one exposure causes damage", "correct": false},
      {"text": "Only high doses are harmful", "correct": false}
    ],
    "explanation": "Radiation effects are additive, meaning damage accumulates over repeated exposures."
  },
  {
    "question": "A dental worker is exposed to small amounts of radiation daily over years. What concept best explains the potential long-term risk?",
    "answers": [
      {"text": "Threshold effect", "correct": false},
      {"text": "Cumulative effect", "correct": true},
      {"text": "Latent period", "correct": false},
      {"text": "Dose rate", "correct": false},
      {"text": "Direct effect", "correct": false}
    ],
    "explanation": "Repeated exposures lead to accumulation of damage, increasing long-term health risks."
  },
  {
    "question": "Which term refers to the total amount of radiation energy absorbed by tissues?",
    "answers": [
      {"text": "Dose rate", "correct": false},
      {"text": "Total dose", "correct": true},
      {"text": "Intensity", "correct": false},
      {"text": "Exposure time", "correct": false},
      {"text": "Threshold dose", "correct": false}
    ],
    "explanation": "Total dose is the total quantity of radiation absorbed by tissues."
  },
  {
    "question": "Which term describes how quickly radiation exposure occurs?",
    "answers": [
      {"text": "Total dose", "correct": false},
      {"text": "Dose rate", "correct": true},
      {"text": "Intensity", "correct": false},
      {"text": "Threshold", "correct": false},
      {"text": "Latency", "correct": false}
    ],
    "explanation": "Dose rate refers to the speed at which radiation is delivered and absorbed."
  },
  {
    "question": "Which statement best describes nonstochastic effects?",
    "answers": [
      {"text": "No threshold and random occurrence", "correct": false},
      {"text": "Severity unrelated to dose", "correct": false},
      {"text": "Require threshold and increase with dose", "correct": true},
      {"text": "Occur only at low doses", "correct": false},
      {"text": "Cause only genetic mutations", "correct": false}
    ],
    "explanation": "Nonstochastic effects occur only after a threshold and their severity increases with dose."
  },
  {
    "question": "A fetus exposed to high radiation develops developmental abnormalities. What type of effect is this?",
    "answers": [
      {"text": "Stochastic", "correct": false},
      {"text": "Nonstochastic", "correct": true},
      {"text": "Latent", "correct": false},
      {"text": "Cumulative", "correct": false},
      {"text": "Indirect", "correct": false}
    ],
    "explanation": "Teratogenesis and fetal death are deterministic effects requiring a threshold dose."
  },
  {
    "question": "Which outcome best reflects the additive nature of radiation exposure?",
    "answers": [
      {"text": "Single exposure causes all damage", "correct": false},
      {"text": "Damage is temporary", "correct": false},
      {"text": "Repeated exposures increase total damage", "correct": true},
      {"text": "Radiation effects cancel out", "correct": false},
      {"text": "Only high doses matter", "correct": false}
    ],
    "explanation": "Radiation damage is cumulative, meaning repeated exposures add to total tissue injury."
  },
  {
    "question": "Which statement best describes the relationship between dose and severity in stochastic effects?",
    "answers": [
      {"text": "Severity increases with dose", "correct": false},
      {"text": "Severity decreases with dose", "correct": false},
      {"text": "Severity is independent of dose", "correct": true},
      {"text": "Severity occurs only above threshold", "correct": false},
      {"text": "Severity depends on exposure time", "correct": false}
    ],
    "explanation": "In stochastic effects, dose affects probability, not severity."
  },

  {
    "question": "A 45-year-old dental assistant has been working in a clinic for 20 years with intermittent exposure to low-dose dental radiographs. She is concerned about potential health effects from chronic exposure. Which of the following outcomes is most consistent with long-term radiation effects?",
    "answers": [
      {"text": "Acute mucositis within days of exposure", "correct": false},
      {"text": "Radiation burns immediately after exposure", "correct": false},
      {"text": "Development of leukemia years later", "correct": true},
      {"text": "Transient erythema within hours", "correct": false},
      {"text": "Immediate cataract formation after a single exposure", "correct": false}
    ],
    "explanation": "Long-term effects of radiation appear after years, decades, or even generations and are associated with repeated exposure to small doses over time. These effects include cancer, such as leukemia. Short-term effects occur within minutes to weeks and are not relevant to dental exposures."
  },
  {
    "question": "Which of the following best describes short-term radiation effects?",
    "answers": [
      {"text": "Effects appearing after decades due to cumulative dose", "correct": false},
      {"text": "Effects seen within minutes, days, or weeks after exposure", "correct": true},
      {"text": "Effects that are only genetic in nature", "correct": false},
      {"text": "Effects exclusive to dental radiography", "correct": false},
      {"text": "Effects that only occur with high-dose therapeutic radiation", "correct": false}
    ],
    "explanation": "Short-term effects manifest quickly—within minutes to weeks following exposure. However, these are not applicable in dentistry because dental radiography involves low doses."
  },
  {
    "question": "A pregnant patient asks about the risks of repeated low-dose dental x-rays over time. Which of the following outcomes is most strongly associated with repeated low-level radiation exposure?",
    "answers": [
      {"text": "Hair loss within hours", "correct": false},
      {"text": "Bone fracture", "correct": false},
      {"text": "Birth abnormalities in offspring", "correct": true},
      {"text": "Immediate tissue necrosis", "correct": false},
      {"text": "Thermal injury to oral mucosa", "correct": false}
    ],
    "explanation": "Repeated low-dose radiation exposure is associated with long-term effects such as cancer, genetic defects, and birth abnormalities. These effects may manifest in future generations rather than immediately."
  },
  {
    "question": "Which of the following is classified as a somatic effect of radiation exposure?",
    "answers": [
      {"text": "Mutation affecting offspring", "correct": false},
      {"text": "Genetic defect passed to future generations", "correct": false},
      {"text": "Leukemia in the exposed individual", "correct": true},
      {"text": "Chromosomal mutation in germ cells only", "correct": false},
      {"text": "Hereditary trait alteration", "correct": false}
    ],
    "explanation": "Somatic effects affect the exposed individual directly. Cancer, including leukemia and cataracts, are examples. Genetic effects, on the other hand, affect offspring."
  },
  {
    "question": "A clinician explains that radiation-induced genetic mutations will not affect the exposed patient but may impact future generations. Which type of cells are primarily involved in this process?",
    "answers": [
      {"text": "Epithelial cells", "correct": false},
      {"text": "Somatic cells", "correct": false},
      {"text": "Genetic (germ) cells", "correct": true},
      {"text": "Connective tissue cells", "correct": false},
      {"text": "Muscle cells", "correct": false}
    ],
    "explanation": "Radiation damage to genetic (germ) cells leads to mutations that affect offspring, not the exposed individual. This distinguishes genetic effects from somatic effects."
  },
  {
    "question": "Which of the following tissues is considered highly radiosensitive?",
    "answers": [
      {"text": "Cartilage", "correct": false},
      {"text": "Muscle", "correct": false},
      {"text": "Lymphoid tissue", "correct": true},
      {"text": "Enamel", "correct": false},
      {"text": "Dentin", "correct": false}
    ],
    "explanation": "Radiosensitive tissues contain rapidly dividing cells. Examples include lymphoid tissue, bone marrow, testes, and intestines."
  },
  {
    "question": "During dental radiography, special care is taken to protect certain organs that are more susceptible to radiation damage and whose injury would significantly affect quality of life. Which of the following best describes such an organ?",
    "answers": [
      {"text": "Accessory organ", "correct": false},
      {"text": "Target organ", "correct": false},
      {"text": "Critical organ", "correct": true},
      {"text": "Secondary organ", "correct": false},
      {"text": "Resistant organ", "correct": false}
    ],
    "explanation": "A critical organ is one that, if damaged, significantly reduces a person’s quality of life. These organs receive more radiation exposure during dental imaging."
  },
  {
    "question": "Which of the following is considered a critical organ during dental radiographic procedures?",
    "answers": [
      {"text": "Liver", "correct": false},
      {"text": "Kidney", "correct": false},
      {"text": "Thyroid gland", "correct": true},
      {"text": "Pancreas", "correct": false},
      {"text": "Spleen", "correct": false}
    ],
    "explanation": "Critical organs in dental radiography include the thyroid gland, bone marrow, skin, and lens of the eye due to their exposure in head and neck imaging."
  },
  {
    "question": "A patient undergoes frequent dental radiographs without thyroid protection. Which potential long-term effect is most concerning for this exposed critical organ?",
    "answers": [
      {"text": "Muscle atrophy", "correct": false},
      {"text": "Thyroid cancer", "correct": true},
      {"text": "Immediate ulceration", "correct": false},
      {"text": "Bone necrosis", "correct": false},
      {"text": "Acute inflammation", "correct": false}
    ],
    "explanation": "The thyroid gland is a critical organ and is sensitive to radiation. Repeated exposure increases the risk of long-term effects such as cancer."
  },
  {
    "question": "Which of the following organs is included among radiosensitive organs?",
    "answers": [
      {"text": "Brain", "correct": false},
      {"text": "Heart", "correct": false},
      {"text": "Bone marrow", "correct": true},
      {"text": "Liver", "correct": false},
      {"text": "Skin", "correct": false}
    ],
    "explanation": "Radiosensitive organs include bone marrow, lymphoid tissues, testes, and intestines due to their high mitotic activity and susceptibility to radiation damage."
  },
  
  {
    "question": "Which of the following correctly identifies the newer system of radiation measurement units?",
    "answers": [
      {"text": "Traditional system", "correct": false},
      {"text": "Standard system", "correct": false},
      {"text": "SI system", "correct": true},
      {"text": "Imperial system", "correct": false},
      {"text": "Dosimetric system", "correct": false}
    ],
    "explanation": "The SI system (Système International d’Unités) is the modern, metric-based system used for radiation measurements. It replaces the older traditional (standard) system."
  },
  {
    "question": "Which of the following is included in the traditional system of radiation measurement?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false},
      {"text": "Coulombs/kilogram", "correct": false},
      {"text": "Roentgen", "correct": true},
      {"text": "Becquerel", "correct": false}
    ],
    "explanation": "The traditional system includes Roentgen (R), rad, and rem. Gray, Sievert, and Coulombs/kg belong to the SI system."
  },
  {
    "question": "A dental radiology student is asked to convert radiation units from the traditional system to the SI system. Which of the following pairs correctly matches equivalent measurement categories?",
    "answers": [
      {"text": "Roentgen – Sievert", "correct": false},
      {"text": "Rad – Gray", "correct": true},
      {"text": "Rem – Coulombs/kg", "correct": false},
      {"text": "Roentgen – Gray", "correct": false},
      {"text": "Rad – Sievert", "correct": false}
    ],
    "explanation": "Rad (traditional) and Gray (SI) both measure absorbed dose. Other correct equivalents (not listed here correctly) would include Roentgen ↔ Coulombs/kg (exposure) and rem ↔ Sievert (dose equivalent)."
  },
  {
    "question": "Which SI unit is used to measure radiation exposure in air?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false},
      {"text": "Coulombs/kilogram", "correct": true},
      {"text": "Rad", "correct": false},
      {"text": "Rem", "correct": false}
    ],
    "explanation": "Coulombs per kilogram (C/kg) is the SI unit used to measure radiation exposure in air. Its traditional counterpart is the Roentgen."
  },
  {
    "question": "A clinician reviewing a radiation report notes that the patient received a dose expressed in Sieverts (Sv). What does this unit measure?",
    "answers": [
      {"text": "Radiation exposure in air", "correct": false},
      {"text": "Radioactivity of a source", "correct": false},
      {"text": "Absorbed dose in tissue", "correct": false},
      {"text": "Biologic effect of radiation", "correct": true},
      {"text": "Electrical charge in matter", "correct": false}
    ],
    "explanation": "Sievert (Sv) is the SI unit for dose equivalent, which reflects the biological effect of radiation. Its traditional counterpart is the rem."
  },
  {
    "question": "Which of the following represents the traditional unit for radiation absorbed dose?",
    "answers": [
      {"text": "Roentgen", "correct": false},
      {"text": "Rad", "correct": true},
      {"text": "Rem", "correct": false},
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false}
    ],
    "explanation": "Rad is the traditional unit used to measure absorbed dose. The SI equivalent is the Gray (Gy)."
  },
  {
    "question": "A dental assistant is studying radiation units and notes that Roentgen is part of the traditional system. What does this unit primarily measure?",
    "answers": [
      {"text": "Absorbed dose", "correct": false},
      {"text": "Biologic damage", "correct": false},
      {"text": "Radiation exposure", "correct": true},
      {"text": "Radioactive decay", "correct": false},
      {"text": "Energy transfer efficiency", "correct": false}
    ],
    "explanation": "Roentgen (R) measures radiation exposure in air. Its SI equivalent is Coulombs per kilogram (C/kg)."
  },
  {
    "question": "Which of the following SI units corresponds to the traditional unit rem?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Coulombs/kilogram", "correct": false},
      {"text": "Sievert", "correct": true},
      {"text": "Rad", "correct": false},
      {"text": "Roentgen", "correct": false}
    ],
    "explanation": "Rem (traditional) and Sievert (SI) both measure dose equivalent, reflecting biological effects of radiation."
  },
  {
    "question": "A researcher compares radiation reports from two countries—one using traditional units and the other using SI units. Which of the following combinations correctly lists only SI units?",
    "answers": [
      {"text": "Roentgen, rad, rem", "correct": false},
      {"text": "Gray, Sievert, Coulombs/kg", "correct": true},
      {"text": "Rad, Gray, Sievert", "correct": false},
      {"text": "Rem, Sievert, Coulombs/kg", "correct": false},
      {"text": "Roentgen, Gray, Coulombs/kg", "correct": false}
    ],
    "explanation": "The SI system includes Gray (Gy), Sievert (Sv), and Coulombs/kg (C/kg). The traditional system includes Roentgen, rad, and rem."
  },
  {
    "question": "Which statement best describes the relationship between traditional and SI radiation units?",
    "answers": [
      {"text": "Both systems use identical units", "correct": false},
      {"text": "SI units replaced traditional units and are metric-based", "correct": true},
      {"text": "Traditional units are more precise than SI units", "correct": false},
      {"text": "SI units are only used in dentistry", "correct": false},
      {"text": "Traditional units measure only biological effects", "correct": false}
    ],
    "explanation": "The SI system is the modern, internationally accepted metric system that has largely replaced the traditional system for radiation measurement."
  },

  {
    "question": "Which of the following correctly identifies the newer system of radiation measurement units?",
    "answers": [
      {"text": "Traditional system", "correct": false},
      {"text": "Standard system", "correct": false},
      {"text": "SI system", "correct": true},
      {"text": "Imperial system", "correct": false},
      {"text": "Dosimetric system", "correct": false}
    ],
    "explanation": "The SI system (Système International d’Unités) is the modern, metric-based system used for radiation measurements. It replaces the older traditional (standard) system."
  },
  {
    "question": "Which of the following is included in the traditional system of radiation measurement?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false},
      {"text": "Coulombs/kilogram", "correct": false},
      {"text": "Roentgen", "correct": true},
      {"text": "Becquerel", "correct": false}
    ],
    "explanation": "The traditional system includes Roentgen (R), rad, and rem. Gray, Sievert, and Coulombs/kg belong to the SI system."
  },
  {
    "question": "A dental radiology student is asked to convert radiation units from the traditional system to the SI system. Which of the following pairs correctly matches equivalent measurement categories?",
    "answers": [
      {"text": "Roentgen – Sievert", "correct": false},
      {"text": "Rad – Gray", "correct": true},
      {"text": "Rem – Coulombs/kg", "correct": false},
      {"text": "Roentgen – Gray", "correct": false},
      {"text": "Rad – Sievert", "correct": false}
    ],
    "explanation": "Rad (traditional) and Gray (SI) both measure absorbed dose. Other correct equivalents (not listed here correctly) would include Roentgen ↔ Coulombs/kg (exposure) and rem ↔ Sievert (dose equivalent)."
  },
  {
    "question": "Which SI unit is used to measure radiation exposure in air?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false},
      {"text": "Coulombs/kilogram", "correct": true},
      {"text": "Rad", "correct": false},
      {"text": "Rem", "correct": false}
    ],
    "explanation": "Coulombs per kilogram (C/kg) is the SI unit used to measure radiation exposure in air. Its traditional counterpart is the Roentgen."
  },
  {
    "question": "A clinician reviewing a radiation report notes that the patient received a dose expressed in Sieverts (Sv). What does this unit measure?",
    "answers": [
      {"text": "Radiation exposure in air", "correct": false},
      {"text": "Radioactivity of a source", "correct": false},
      {"text": "Absorbed dose in tissue", "correct": false},
      {"text": "Biologic effect of radiation", "correct": true},
      {"text": "Electrical charge in matter", "correct": false}
    ],
    "explanation": "Sievert (Sv) is the SI unit for dose equivalent, which reflects the biological effect of radiation. Its traditional counterpart is the rem."
  },
  {
    "question": "Which of the following represents the traditional unit for radiation absorbed dose?",
    "answers": [
      {"text": "Roentgen", "correct": false},
      {"text": "Rad", "correct": true},
      {"text": "Rem", "correct": false},
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false}
    ],
    "explanation": "Rad is the traditional unit used to measure absorbed dose. The SI equivalent is the Gray (Gy)."
  },
  {
    "question": "A dental assistant is studying radiation units and notes that Roentgen is part of the traditional system. What does this unit primarily measure?",
    "answers": [
      {"text": "Absorbed dose", "correct": false},
      {"text": "Biologic damage", "correct": false},
      {"text": "Radiation exposure", "correct": true},
      {"text": "Radioactive decay", "correct": false},
      {"text": "Energy transfer efficiency", "correct": false}
    ],
    "explanation": "Roentgen (R) measures radiation exposure in air. Its SI equivalent is Coulombs per kilogram (C/kg)."
  },
  {
    "question": "Which of the following SI units corresponds to the traditional unit rem?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Coulombs/kilogram", "correct": false},
      {"text": "Sievert", "correct": true},
      {"text": "Rad", "correct": false},
      {"text": "Roentgen", "correct": false}
    ],
    "explanation": "Rem (traditional) and Sievert (SI) both measure dose equivalent, reflecting biological effects of radiation."
  },
  {
    "question": "A researcher compares radiation reports from two countries—one using traditional units and the other using SI units. Which of the following combinations correctly lists only SI units?",
    "answers": [
      {"text": "Roentgen, rad, rem", "correct": false},
      {"text": "Gray, Sievert, Coulombs/kg", "correct": true},
      {"text": "Rad, Gray, Sievert", "correct": false},
      {"text": "Rem, Sievert, Coulombs/kg", "correct": false},
      {"text": "Roentgen, Gray, Coulombs/kg", "correct": false}
    ],
    "explanation": "The SI system includes Gray (Gy), Sievert (Sv), and Coulombs/kg (C/kg). The traditional system includes Roentgen, rad, and rem."
  },
  {
    "question": "Which statement best describes the relationship between traditional and SI radiation units?",
    "answers": [
      {"text": "Both systems use identical units", "correct": false},
      {"text": "SI units replaced traditional units and are metric-based", "correct": true},
      {"text": "Traditional units are more precise than SI units", "correct": false},
      {"text": "SI units are only used in dentistry", "correct": false},
      {"text": "Traditional units measure only biological effects", "correct": false}
    ],
    "explanation": "The SI system is the modern, internationally accepted metric system that has largely replaced the traditional system for radiation measurement."
  },
  
  {
    "question": "Which of the following best defines radiation exposure?",
    "answers": [
      {"text": "Amount of energy absorbed by tissues", "correct": false},
      {"text": "Biologic damage caused by radiation", "correct": false},
      {"text": "Measurement of ionization in air produced by x-rays", "correct": true},
      {"text": "Total radiation emitted by a source", "correct": false},
      {"text": "Amount of radiation reaching bone", "correct": false}
    ],
    "explanation": "Exposure refers specifically to the ionization of air caused by x-rays. It does not measure absorbed energy or biologic effects."
  },
  {
    "question": "Which of the following is the traditional unit of radiation exposure?",
    "answers": [
      {"text": "Rad", "correct": false},
      {"text": "Rem", "correct": false},
      {"text": "Roentgen", "correct": true},
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false}
    ],
    "explanation": "The roentgen (R) is the traditional unit used to measure radiation exposure in air."
  },
  {
    "question": "A radiology student is asked to define the roentgen in precise terms. Which of the following best describes it?",
    "answers": [
      {"text": "Amount of radiation absorbed by tissue", "correct": false},
      {"text": "Energy equivalent of 1 J/kg", "correct": false},
      {"text": "Quantity of radiation producing 2.58 × 10⁻⁴ C/kg of air at STP", "correct": true},
      {"text": "Number of photons emitted per second", "correct": false},
      {"text": "Biologic damage per unit dose", "correct": false}
    ],
    "explanation": "The roentgen is defined by the amount of ionization it produces in air, specifically 2.58 × 10⁻⁴ coulombs per kilogram at standard temperature and pressure."
  },
  {
    "question": "Which SI unit is used to express radiation exposure?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false},
      {"text": "Coulombs per kilogram", "correct": true},
      {"text": "Joule", "correct": false},
      {"text": "Rad", "correct": false}
    ],
    "explanation": "C/kg is the SI unit for exposure and represents the amount of electrical charge (ionization) produced in air."
  },
  {
    "question": "A clinician explains that the coulomb is central to understanding radiation exposure measurements. What does the coulomb represent?",
    "answers": [
      {"text": "Unit of absorbed dose", "correct": false},
      {"text": "Unit of biologic effect", "correct": false},
      {"text": "Unit of electrical charge", "correct": true},
      {"text": "Unit of radiation energy", "correct": false},
      {"text": "Unit of photon count", "correct": false}
    ],
    "explanation": "The coulomb (C) measures electrical charge, which corresponds to the number of ion pairs formed in air during radiation exposure."
  },
  {
    "question": "Which of the following best defines radiation dose?",
    "answers": [
      {"text": "Ionization produced in air", "correct": false},
      {"text": "Amount of energy absorbed by tissue", "correct": true},
      {"text": "Number of ion pairs in air", "correct": false},
      {"text": "Electrical charge per kilogram", "correct": false},
      {"text": "Rate of radiation emission", "correct": false}
    ],
    "explanation": "Dose refers to the energy absorbed by tissues and is distinct from exposure, which measures ionization in air."
  },
  {
    "question": "Which is the traditional unit of absorbed radiation dose?",
    "answers": [
      {"text": "Roentgen", "correct": false},
      {"text": "Rad", "correct": true},
      {"text": "Rem", "correct": false},
      {"text": "Gray", "correct": false},
      {"text": "Sievert", "correct": false}
    ],
    "explanation": "Rad is the traditional unit for absorbed dose. It applies to all types of radiation and materials, unlike the roentgen."
  },
  {
    "question": "A patient’s radiation report indicates an absorbed dose expressed in gray (Gy). Which of the following best describes this unit?",
    "answers": [
      {"text": "Ionization in air", "correct": false},
      {"text": "Electrical charge per unit mass", "correct": false},
      {"text": "Energy absorbed per kilogram of tissue", "correct": true},
      {"text": "Biologic effect of radiation", "correct": false},
      {"text": "Rate of radioactive decay", "correct": false}
    ],
    "explanation": "Gray (Gy) is the SI unit of absorbed dose and equals 1 joule per kilogram (1 J/kg)."
  },
  {
    "question": "What is the relationship between rad and gray?",
    "answers": [
      {"text": "1 rad = 1 Gy", "correct": false},
      {"text": "1 rad = 100 Gy", "correct": false},
      {"text": "1 rad = 0.01 Gy", "correct": true},
      {"text": "1 Gy = 0.01 rad", "correct": false},
      {"text": "They are unrelated units", "correct": false}
    ],
    "explanation": "The conversion shows that 1 gray equals 100 rad, or conversely, 1 rad equals 0.01 gray."
  },
  {
    "question": "A radiation safety officer converts an absorbed dose from SI to traditional units. If a dose is 1 Gy, what is its equivalent in rad?",
    "answers": [
      {"text": "0.01 rad", "correct": false},
      {"text": "1 rad", "correct": false},
      {"text": "10 rad", "correct": false},
      {"text": "100 rad", "correct": true},
      {"text": "1000 rad", "correct": false}
    ],
    "explanation": "Since 1 Gy = 100 rad, conversion from SI to traditional units requires multiplying by 100."
  },
  {
    "question": "Which of the following units measures dose equivalent?",
    "answers": [
      {"text": "Roentgen", "correct": false},
      {"text": "Rad", "correct": false},
      {"text": "Rem", "correct": true},
      {"text": "Gray", "correct": false},
      {"text": "Coulomb", "correct": false}
    ],
    "explanation": "Rem is the traditional unit for dose equivalent, reflecting biological effects of radiation."
  },
  {
    "question": "A radiologist evaluates the biologic risk of radiation exposure and refers to measurements in sieverts (Sv). What is being assessed?",
    "answers": [
      {"text": "Exposure in air", "correct": false},
      {"text": "Absorbed dose", "correct": false},
      {"text": "Electrical ionization", "correct": false},
      {"text": "Biologic effect of radiation", "correct": true},
      {"text": "Radiation frequency", "correct": false}
    ],
    "explanation": "Sievert (Sv) is the SI unit of dose equivalent and reflects the biological impact of radiation on tissues."
  },
  {
    "question": "Which SI unit corresponds to the traditional unit rem?",
    "answers": [
      {"text": "Gray", "correct": false},
      {"text": "Coulombs/kg", "correct": false},
      {"text": "Sievert", "correct": true},
      {"text": "Rad", "correct": false},
      {"text": "Roentgen", "correct": false}
    ],
    "explanation": "Rem and sievert both measure dose equivalent, accounting for biological effects."
  },
  {
    "question": "A clinician converts 1 Sv into traditional units. What is the equivalent value?",
    "answers": [
      {"text": "0.01 rem", "correct": false},
      {"text": "1 rem", "correct": false},
      {"text": "10 rem", "correct": false},
      {"text": "100 rem", "correct": true},
      {"text": "1000 rem", "correct": false}
    ],
    "explanation": "1 sievert equals 100 rem. This conversion reflects the relationship between SI and traditional dose equivalent units."
  },
  {
    "question": "Which statement best distinguishes exposure from dose?",
    "answers": [
      {"text": "Exposure measures energy absorbed in tissue", "correct": false},
      {"text": "Dose measures ionization in air", "correct": false},
      {"text": "Exposure measures ionization in air, while dose measures energy absorbed by tissue", "correct": true},
      {"text": "Both measure biologic effects directly", "correct": false},
      {"text": "They are interchangeable terms", "correct": false}
    ],
    "explanation": "Exposure refers to ionization in air, whereas dose refers to energy absorbed in tissue. This distinction is fundamental in radiation physics."
  },
  
  {
    "question": "The latent period in radiation biology is the time between:",
    "answers": [
      {"text": "initial injury and repair", "correct": false},
      {"text": "subsequent doses of radiation", "correct": false},
      {"text": "cell rest and cell mitosis", "correct": false},
      {"text": "exposure to x-radiation and clinical symptoms", "correct": true},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "The latent period is the delay between exposure to radiation and the appearance of clinical symptoms."
  },
  {
    "question": "A free radical:",
    "answers": [
      {"text": "is an uncharged molecule", "correct": false},
      {"text": "has an unpaired electron in the outer shell", "correct": true},
      {"text": "is highly reactive and unstable", "correct": true},
      {"text": "combines with molecules to form toxins", "correct": true},
      {"text": "all of the above", "correct": true}
    ],
    "explanation": "A free radical is an uncharged molecule with an unpaired electron, making it highly reactive and capable of forming toxins by combining with other molecules."
  },
  {
    "question": "Direct radiation injury occurs when:",
    "answers": [
      {"text": "x-ray photons hit critical targets within a cell", "correct": true},
      {"text": "x-ray photons pass through the cell", "correct": false},
      {"text": "x-ray photons are absorbed and form toxins", "correct": false},
      {"text": "free radicals combine to form toxins", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Direct radiation injury happens when x-ray photons directly strike critical cellular components such as DNA."
  },
  {
    "question": "Indirect radiation injury occurs when:",
    "answers": [
      {"text": "x-ray photons hit critical targets within a cell", "correct": false},
      {"text": "x-ray photons pass through the cell", "correct": false},
      {"text": "x-ray photons are absorbed and form toxins", "correct": true},
      {"text": "x-ray photons hit the DNA of a cell", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Indirect radiation injury results from x-ray photons being absorbed and producing toxins, often through free radical formation."
  },
  {
    "question": "Which relationship describes the response of tissues to radiation?",
    "answers": [
      {"text": "linear", "correct": false},
      {"text": "linear, threshold", "correct": false},
      {"text": "linear, nonthreshold", "correct": true},
      {"text": "nonlinear, nonthreshold", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Tissue response to radiation is typically described as linear and nonthreshold, meaning any dose can cause some effect, and the effect increases proportionally with dose."
  },
  {
    "question": "Which factor(s) contributes to radiation injury?",
    "answers": [
      {"text": "total dose", "correct": false},
      {"text": "dose rate", "correct": false},
      {"text": "cell sensitivity", "correct": false},
      {"text": "age", "correct": false},
      {"text": "all of the above", "correct": true}
    ],
    "explanation": "Radiation injury depends on multiple factors including total dose, dose rate, cell sensitivity, and age."
  },
  {
    "question": "Which statement is correct?",
    "answers": [
      {"text": "Short-term effects are seen with small amounts of radiation absorbed in a short period.", "correct": false},
      {"text": "Short-term effects are seen with small amounts of radiation absorbed in a long period.", "correct": false},
      {"text": "Long-term effects are seen with small amounts of radiation absorbed in a short period.", "correct": false},
      {"text": "Long-term effects are seen with small amounts of radiation absorbed in a long period.", "correct": true},
      {"text": "None of the above.", "correct": false}
    ],
    "explanation": "Long-term effects typically result from small amounts of radiation absorbed over a long period."
  },
  {
    "question": "Radiation injuries that are not seen in the person irradiated but that occur in future generations are termed:",
    "answers": [
      {"text": "somatic effects", "correct": false},
      {"text": "genetic effects", "correct": true},
      {"text": "cumulative effects", "correct": false},
      {"text": "short-term effects", "correct": false},
      {"text": "long-term effects", "correct": false}
    ],
    "explanation": "Genetic effects refer to radiation-induced injuries that affect future generations, not the exposed individual."
  },
  {
    "question": "Which is most susceptible to ionizing radiation?",
    "answers": [
      {"text": "bone tissue", "correct": false},
      {"text": "small lymphocyte", "correct": true},
      {"text": "muscle tissue", "correct": false},
      {"text": "nerve tissue", "correct": false},
      {"text": "epithelial tissue", "correct": false}
    ],
    "explanation": "Small lymphocytes are highly radiosensitive due to their rapid mitotic activity."
  },
  {
    "question": "The sensitivity of tissues to radiation is determined by:",
    "answers": [
      {"text": "mitotic activity", "correct": false},
      {"text": "cell differentiation", "correct": false},
      {"text": "cell metabolism", "correct": false},
      {"text": "all of the above", "correct": true},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Tissue sensitivity depends on mitotic activity, cell differentiation, and metabolism."
  },
  {
    "question": "Which is considered radioresistant?",
    "answers": [
      {"text": "immature reproductive cells", "correct": false},
      {"text": "young bone cells", "correct": false},
      {"text": "mature bone cells", "correct": true},
      {"text": "epithelial cells", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Mature bone cells are relatively radioresistant compared to immature reproductive cells and epithelial cells."
  },
  {
    "question": "An organ that, if damaged, diminishes the quality of an individual’s life is termed:",
    "answers": [
      {"text": "critical", "correct": true},
      {"text": "somatic", "correct": false},
      {"text": "cumulative", "correct": false},
      {"text": "radioresistant", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Critical organs are those whose damage significantly affects quality of life."
  },
  {
    "question": "The traditional unit for measuring x-ray exposure in air is termed:",
    "answers": [
      {"text": "gray", "correct": false},
      {"text": "coulombs per kilogram", "correct": false},
      {"text": "rem", "correct": false},
      {"text": "rad", "correct": false},
      {"text": "roentgen", "correct": true}
    ],
    "explanation": "Roentgen is the traditional unit for measuring x-ray exposure in air."
  },
  {
    "question": "Which radiation unit is determined by the quality factor (QF)?",
    "answers": [
      {"text": "roentgen", "correct": false},
      {"text": "rad", "correct": false},
      {"text": "rem", "correct": true},
      {"text": "gray", "correct": false},
      {"text": "coulombs per kilogram", "correct": false}
    ],
    "explanation": "The rem unit accounts for the quality factor, reflecting biological effect."
  },
  {
    "question": "The unit for measuring the absorption of x-rays is termed:",
    "answers": [
      {"text": "roentgen", "correct": false},
      {"text": "rad", "correct": true},
      {"text": "rem", "correct": false},
      {"text": "quality factor", "correct": false},
      {"text": "sievert", "correct": false}
    ],
    "explanation": "Rad measures the absorbed dose of x-rays."
  },
  // Chapter 5 Radiation Protection
  {
    "question": "A 28-year-old patient presents for routine dental imaging. The dentist decides to delay radiographic exposure after reviewing the patient’s history and determining no immediate diagnostic need. Which principle of radiation protection is BEST demonstrated in this scenario?",
    "answers": [
      {"text": "Proper prescribing of dental images", "correct": true},
      {"text": "Use of added aluminum filtration", "correct": false},
      {"text": "Application of rectangular collimation", "correct": false},
      {"text": "Use of a position-indicating device", "correct": false},
      {"text": "Reliance on inherent filtration", "correct": false}
    ],
    "explanation": "The first and most important step in minimizing radiation exposure is appropriate prescribing or ordering of radiographs. Avoiding unnecessary exposure eliminates risk entirely. Equipment modifications (filtration, collimation) reduce exposure but do not replace the importance of clinical judgment."
  },
  {
    "question": "A dental x-ray unit operates at 65 kVp. During inspection, it is found that the total aluminum filtration is 1.0 mm. What is the most appropriate interpretation?",
    "answers": [
      {"text": "This meets minimum regulatory requirements", "correct": false},
      {"text": "This exceeds recommended filtration", "correct": false},
      {"text": "This is insufficient and requires additional filtration", "correct": true},
      {"text": "This is acceptable only with rectangular collimation", "correct": false},
      {"text": "This level applies only to inherent filtration", "correct": false}
    ],
    "explanation": "Machines operating at or below 70 kVp require a minimum of 1.5 mm aluminum filtration. A total of 1.0 mm does not meet regulatory standards, so added filtration must be incorporated."
  },
  {
    "question": "A dental radiographer explains that inherent filtration occurs without adding any external materials. Which of the following BEST describes inherent filtration?",
    "answers": [
      {"text": "Filtration achieved by aluminum disks placed in the beam", "correct": false},
      {"text": "Filtration provided by the glass window, oil, and tubehead seal", "correct": true},
      {"text": "Filtration from the collimator restricting beam size", "correct": false},
      {"text": "Filtration due to lead shielding in the tubehead", "correct": false},
      {"text": "Filtration from the position-indicating device", "correct": false}
    ],
    "explanation": "Inherent filtration occurs naturally as the x-ray beam passes through components of the tubehead, including the glass window, insulating oil, and seal. This typically equals 0.5–1.0 mm aluminum equivalent."
  },
  {
    "question": "A dental clinic upgrades its x-ray machine to operate at 80 kVp. What is the MINIMUM total aluminum filtration required?",
    "answers": [
      {"text": "0.5 mm", "correct": false},
      {"text": "1.0 mm", "correct": false},
      {"text": "1.5 mm", "correct": false},
      {"text": "2.0 mm", "correct": false},
      {"text": "2.5 mm", "correct": true}
    ],
    "explanation": "Machines operating above 70 kVp require at least 2.5 mm aluminum filtration. This ensures removal of low-energy, non-diagnostic x-rays that increase patient dose."
  },
  {
    "question": "A patient expresses concern about radiation exposure. The dentist switches from a circular to a rectangular collimator. What is the PRIMARY benefit of this change?",
    "answers": [
      {"text": "Eliminates need for filtration", "correct": false},
      {"text": "Increases beam intensity", "correct": false},
      {"text": "Reduces exposure time", "correct": false},
      {"text": "Reduces exposed tissue by approximately 60%", "correct": true},
      {"text": "Enhances inherent filtration", "correct": false}
    ],
    "explanation": "Rectangular collimation significantly reduces the size of the beam, exposing about 60% less tissue compared to circular collimation, thereby lowering patient radiation dose."
  },
  {
    "question": "A dental assistant notes that the x-ray beam includes many low-energy photons that do not contribute to image formation but increase patient dose. Which intervention directly addresses this issue?",
    "answers": [
      {"text": "Rectangular collimation", "correct": false},
      {"text": "Lead apron usage", "correct": false},
      {"text": "Added aluminum filtration", "correct": true},
      {"text": "Position-indicating device adjustment", "correct": false},
      {"text": "Increasing exposure time", "correct": false}
    ],
    "explanation": "Added filtration uses aluminum disks to remove long-wavelength, low-energy x-rays, which would otherwise be absorbed by the patient without improving image quality."
  },
  {
    "question": "A clinician uses a circular collimator during intraoral radiography. What is the approximate diameter of the x-ray beam produced?",
    "answers": [
      {"text": "1.5 inches", "correct": false},
      {"text": "2.0 inches", "correct": false},
      {"text": "2.75 inches", "correct": true},
      {"text": "3.5 inches", "correct": false},
      {"text": "4.0 inches", "correct": false}
    ],
    "explanation": "Circular collimators produce a cone-shaped beam approximately 2.75 inches in diameter, which is larger than necessary and results in greater tissue exposure."
  },
  {
    "question": "A dental student claims that inherent filtration alone is sufficient to meet legal standards. Which response is MOST accurate?",
    "answers": [
      {"text": "Correct, inherent filtration meets all standards", "correct": false},
      {"text": "Correct only for machines below 60 kVp", "correct": false},
      {"text": "Incorrect, added filtration is also required", "correct": true},
      {"text": "Incorrect, collimation replaces filtration", "correct": false},
      {"text": "Correct if rectangular collimation is used", "correct": false}
    ],
    "explanation": "Inherent filtration alone (0.5–1.0 mm Al equivalent) is not sufficient to meet regulatory standards. Additional aluminum filtration must be added to reach required levels."
  },
  {
    "question": "A patient undergoes repeated dental radiographs over several visits. Which strategy BEST minimizes cumulative radiation exposure?",
    "answers": [
      {"text": "Increasing beam diameter", "correct": false},
      {"text": "Using circular collimation", "correct": false},
      {"text": "Proper prescribing and limiting unnecessary exposures", "correct": true},
      {"text": "Reducing inherent filtration", "correct": false},
      {"text": "Increasing kVp without filtration", "correct": false}
    ],
    "explanation": "The most effective way to reduce cumulative exposure is to avoid unnecessary radiographs. Equipment adjustments help, but clinical decision-making has the greatest impact."
  },
  {
    "question": "Which combination of equipment features is ESSENTIAL for minimizing patient exposure in a dental x-ray unit?",
    "answers": [
      {"text": "Glass window, lead apron, and exposure timer", "correct": false},
      {"text": "Aluminum filtration, lead collimator, and position-indicating device", "correct": true},
      {"text": "Rectangular collimator, film holder, and bite block", "correct": false},
      {"text": "Lead apron, thyroid collar, and exposure switch", "correct": false},
      {"text": "Insulating oil, digital sensor, and timer", "correct": false}
    ],
    "explanation": "Proper equipment must include filtration (to remove low-energy rays), collimation (to restrict beam size), and a position-indicating device (to direct the beam accurately). These work together to minimize patient exposure."
  },

  {
    "question": "A dental radiographer prepares to take a periapical radiograph and carefully aligns the beam using a cylindrical attachment extending from the tubehead. What is the PRIMARY function of this device?",
    "answers": [
      {"text": "Filters low-energy x-rays", "correct": false},
      {"text": "Directs the x-ray beam toward the target", "correct": true},
      {"text": "Reduces exposure time automatically", "correct": false},
      {"text": "Absorbs scatter radiation after exposure", "correct": false},
      {"text": "Controls kilovoltage output", "correct": false}
    ],
    "explanation": "The position-indicating device (PID) is an extension of the tubehead used to direct and shape the x-ray beam toward the patient and receptor. It ensures accurate beam alignment and minimizes unnecessary exposure."
  },
  {
    "question": "A student refers to the PID as a “cone” during a clinical procedure. Which statement BEST clarifies this terminology?",
    "answers": [
      {"text": "The term is incorrect and should never be used", "correct": false},
      {"text": "The term refers to a rectangular PID only", "correct": false},
      {"text": "The term persists historically, although conical PIDs are obsolete", "correct": true},
      {"text": "The term applies only to digital radiography", "correct": false},
      {"text": "The term describes a beam alignment device", "correct": false}
    ],
    "explanation": "“Cone” is a historical term still used interchangeably with PID. However, pointed conical PIDs are no longer used because they produced excess scatter radiation."
  },
  {
    "question": "A clinic replaces old pointed PIDs with open-ended cylindrical PIDs. What is the PRIMARY reason for this change?",
    "answers": [
      {"text": "To increase beam intensity", "correct": false},
      {"text": "To eliminate cone-produced scatter radiation", "correct": true},
      {"text": "To reduce filtration requirements", "correct": false},
      {"text": "To shorten exposure time", "correct": false},
      {"text": "To increase beam divergence", "correct": false}
    ],
    "explanation": "Pointed conical PIDs caused excess scatter radiation as x-rays interacted with the cone material. Modern open-ended, lead-lined PIDs minimize scatter production."
  },
  {
    "question": "During a radiographic procedure, which combination of devices BEST minimizes patient exposure?",
    "answers": [
      {"text": "PID, timer, and exposure switch", "correct": false},
      {"text": "Thyroid collar, lead apron, and fast receptor", "correct": true},
      {"text": "Collimator, tubehead seal, and glass window", "correct": false},
      {"text": "Film holder, bite block, and exposure button", "correct": false},
      {"text": "Insulating oil, PID, and transformer", "correct": false}
    ],
    "explanation": "Protective devices such as the thyroid collar and lead apron shield radiosensitive tissues, while fast receptors (digital or F-speed film) reduce exposure needed to produce an image."
  },
  {
    "question": "A patient asks why a thyroid collar is placed around their neck during dental radiography. What is the BEST explanation?",
    "answers": [
      {"text": "It reduces beam intensity before reaching the receptor", "correct": false},
      {"text": "It protects the thyroid from scatter radiation", "correct": true},
      {"text": "It stabilizes head position during exposure", "correct": false},
      {"text": "It filters low-energy x-rays", "correct": false},
      {"text": "It improves image sharpness", "correct": false}
    ],
    "explanation": "The thyroid gland is highly radiosensitive. The thyroid collar (lead shield) blocks scatter radiation from reaching this area, reducing risk."
  },
  {
    "question": "A dental assistant uses a 16-inch PID instead of an 8-inch PID. What is the PRIMARY advantage of the longer PID?",
    "answers": [
      {"text": "Increases beam divergence", "correct": false},
      {"text": "Decreases exposure time automatically", "correct": false},
      {"text": "Reduces beam divergence and patient exposure", "correct": true},
      {"text": "Eliminates need for collimation", "correct": false},
      {"text": "Increases scatter radiation", "correct": false}
    ],
    "explanation": "A longer PID (16-inch) produces less beam divergence, resulting in a more parallel beam and reduced exposure to surrounding tissues."
  },
  {
    "question": "A dentist must choose between digital sensors and F-speed film. Which statement BEST reflects their impact on radiation dose?",
    "answers": [
      {"text": "F-speed film reduces exposure more than digital sensors", "correct": false},
      {"text": "Digital sensors provide the greatest reduction in exposure", "correct": true},
      {"text": "Both provide equal reduction in exposure", "correct": false},
      {"text": "D-speed film provides the greatest reduction", "correct": false},
      {"text": "Film speed does not affect radiation exposure", "correct": false}
    ],
    "explanation": "Digital receptors require significantly less radiation. When not available, F-speed film is the next best option, offering substantial exposure reduction."
  },
  {
    "question": "A clinic switches from E-speed film to F-speed (InSight) film. What is the approximate reduction in radiation exposure achieved?",
    "answers": [
      {"text": "10% reduction", "correct": false},
      {"text": "20% reduction", "correct": true},
      {"text": "40% reduction", "correct": false},
      {"text": "60% reduction", "correct": false},
      {"text": "80% reduction", "correct": false}
    ],
    "explanation": "F-speed film provides about a 20% reduction in exposure compared to E-speed film, and about 60% compared to older D-speed film."
  },
  {
    "question": "Which feature of modern PIDs contributes MOST to reducing scatter radiation?",
    "answers": [
      {"text": "Closed-ended design", "correct": false},
      {"text": "Lead lining and open-ended structure", "correct": true},
      {"text": "Short length", "correct": false},
      {"text": "Conical shape", "correct": false},
      {"text": "Plastic composition", "correct": false}
    ],
    "explanation": "Modern PIDs are open-ended and lead-lined, which reduces scatter radiation by preventing interaction of the beam with surrounding materials."
  },
  {
    "question": "A radiograph is nondiagnostic due to improper angulation, requiring retake. Which principle of radiation protection was MOST compromised?",
    "answers": [
      {"text": "Use of thyroid collar", "correct": false},
      {"text": "Proper technique", "correct": true},
      {"text": "Use of lead apron", "correct": false},
      {"text": "Beam alignment device usage", "correct": false},
      {"text": "Filtration adequacy", "correct": false}
    ],
    "explanation": "Poor technique leads to retakes, increasing patient exposure. Proper technique is essential for producing diagnostic images while minimizing radiation dose."
  },

  {
    "question": "A 35-year-old patient requests multiple radiographs “just to be sure,” despite having no clinical indication. The dentist declines and explains the risks. Which principle is BEST demonstrated?",
    "answers": [
      {"text": "Maximum permissible dose", "correct": false},
      {"text": "Radiation monitoring", "correct": false},
      {"text": "ALARA concept", "correct": true},
      {"text": "Beam alignment", "correct": false},
      {"text": "Collimation", "correct": false}
    ],
    "explanation": "The ALARA principle requires that all radiation exposure be kept as low as reasonably achievable. Avoiding unnecessary radiographs is a direct application of this concept."
  },
  {
    "question": "During equipment inspection, a dental student observes aluminum disks placed in the tubehead. What is the PRIMARY purpose of these disks?",
    "answers": [
      {"text": "Increase beam intensity", "correct": false},
      {"text": "Reduce scatter radiation after exposure", "correct": false},
      {"text": "Filter out low-energy, long-wavelength x-rays", "correct": true},
      {"text": "Direct the beam toward the receptor", "correct": false},
      {"text": "Limit exposure time", "correct": false}
    ],
    "explanation": "Aluminum filtration removes low-energy x-rays that do not contribute to image formation and would otherwise increase patient dose."
  },
  {
    "question": "A radiographer selects a rectangular PID instead of a round one. What is the MOST important reason for this choice?",
    "answers": [
      {"text": "It increases image contrast", "correct": false},
      {"text": "It reduces exposure time", "correct": false},
      {"text": "It directs the beam more efficiently", "correct": false},
      {"text": "It significantly reduces patient exposure", "correct": true},
      {"text": "It eliminates need for shielding", "correct": false}
    ],
    "explanation": "Rectangular PIDs restrict beam size more effectively than round ones, thereby reducing the amount of tissue exposed and lowering radiation dose."
  },
  {
    "question": "A dental assistant prepares a patient for radiography by placing a lead apron and thyroid collar. Which tissues are primarily protected by these devices?",
    "answers": [
      {"text": "Muscle and connective tissue", "correct": false},
      {"text": "Brain and cranial nerves", "correct": false},
      {"text": "Thyroid, reproductive, and blood-forming tissues", "correct": true},
      {"text": "Skin and enamel", "correct": false},
      {"text": "Salivary glands only", "correct": false}
    ],
    "explanation": "The thyroid collar protects the thyroid gland, while the lead apron shields reproductive and blood-forming tissues, all of which are highly radiosensitive."
  },
  {
    "question": "A radiograph must be retaken due to improper exposure settings. Which preventive measure would BEST align with ALARA principles?",
    "answers": [
      {"text": "Increasing kVp", "correct": false},
      {"text": "Using faster film or digital sensors", "correct": true},
      {"text": "Using a circular collimator", "correct": false},
      {"text": "Reducing filtration", "correct": false},
      {"text": "Eliminating shielding devices", "correct": false}
    ],
    "explanation": "Fast receptors (especially digital sensors) require less radiation, reducing the likelihood of retakes and minimizing overall exposure."
  },
  {
    "question": "During x-ray exposure, the operator stands 6 feet away at an angle and avoids the primary beam. What is the MAIN reason for this practice?",
    "answers": [
      {"text": "To improve image quality", "correct": false},
      {"text": "To reduce patient anxiety", "correct": false},
      {"text": "To comply with operator protection guidelines", "correct": true},
      {"text": "To increase exposure efficiency", "correct": false},
      {"text": "To reduce equipment wear", "correct": false}
    ],
    "explanation": "Operators must avoid the primary beam and maintain distance/positioning to minimize occupational radiation exposure."
  },
  {
    "question": "A dental radiographer holds a receptor in a patient’s mouth during exposure to prevent movement. What is the BEST evaluation of this action?",
    "answers": [
      {"text": "Acceptable if wearing gloves", "correct": false},
      {"text": "Acceptable if exposure time is short", "correct": false},
      {"text": "Unacceptable under all circumstances", "correct": true},
      {"text": "Acceptable with shielding", "correct": false},
      {"text": "Acceptable if patient is a child", "correct": false}
    ],
    "explanation": "Radiographers must never hold the receptor or tubehead during exposure, as this directly exposes them to radiation."
  },
  {
    "question": "Which of the following BEST describes the maximum permissible dose (MPD) for occupational radiation exposure?",
    "answers": [
      {"text": "1 mSv/year", "correct": false},
      {"text": "5 mSv/year", "correct": false},
      {"text": "10 mSv/year", "correct": false},
      {"text": "50 mSv/year", "correct": true},
      {"text": "100 mSv/year", "correct": false}
    ],
    "explanation": "The MPD for individuals working with radiation is 50 mSv/year (0.05 Sv/year). This is significantly higher than the general public limit."
  },
  {
    "question": "What is the maximum permissible dose (MPD) for the general public?",
    "answers": [
      {"text": "0.5 mSv/year", "correct": false},
      {"text": "1 mSv/year", "correct": true},
      {"text": "5 mSv/year", "correct": false},
      {"text": "10 mSv/year", "correct": false},
      {"text": "50 mSv/year", "correct": false}
    ],
    "explanation": "The MPD for the general public is 1 mSv/year, reflecting stricter limits compared to occupational exposure."
  },
  {
    "question": "After exposure, a radiograph is improperly processed, requiring a retake. Which post-exposure practice was MOST compromised?",
    "answers": [
      {"text": "Use of shielding devices", "correct": false},
      {"text": "Proper technique", "correct": false},
      {"text": "Careful handling and processing of receptors", "correct": true},
      {"text": "Beam alignment", "correct": false},
      {"text": "Use of filtration", "correct": false}
    ],
    "explanation": "Post-exposure steps such as proper receptor handling, film processing, and image retrieval are critical to avoid retakes and unnecessary additional radiation."
  },
  {
    "question": "A dental radiographer explains to a patient the steps taken to minimize radiation exposure before, during, and after imaging. What professional responsibility is being demonstrated?",
    "answers": [
      {"text": "Radiation monitoring", "correct": false},
      {"text": "Legal compliance only", "correct": false},
      {"text": "Patient education and communication", "correct": true},
      {"text": "Equipment calibration", "correct": false},
      {"text": "Dose calculation", "correct": false}
    ],
    "explanation": "Radiographers must be prepared to explain radiation protection measures, reinforcing patient trust and understanding of safety practices."
  },
  {
    "question": "Which combination BEST represents radiation protection measures applied BEFORE x-ray exposure?",
    "answers": [
      {"text": "Use of thyroid collar and lead apron", "correct": false},
      {"text": "Proper prescribing and equipment selection", "correct": true},
      {"text": "Avoiding primary beam and maintaining distance", "correct": false},
      {"text": "Film processing and image retrieval", "correct": false},
      {"text": "Radiation monitoring and dose recording", "correct": false}
    ],
    "explanation": "Before exposure, proper prescribing and correct equipment setup are key steps in minimizing radiation dose in accordance with ALARA."
  },

  {
    "question": "Which statement describes the function of a filter in a dental x-ray tubehead?",
    "answers": [
      {"text": "It reduces the size and shape of the beam.", "correct": false},
      {"text": "It removes low-energy x-rays.", "correct": true},
      {"text": "It removes the dose of radiation to the thyroid gland.", "correct": false},
      {"text": "It decreases the mean energy of the beam.", "correct": false}
    ],
    "explanation": "The filter removes low-energy x-rays that do not contribute to image formation and would increase patient dose unnecessarily."
  },
  {
    "question": "Which is not a component of inherent filtration?",
    "answers": [
      {"text": "oil", "correct": false},
      {"text": "unleaded glass window", "correct": false},
      {"text": "a leaded PID", "correct": true},
      {"text": "tubehead seal", "correct": false}
    ],
    "explanation": "Inherent filtration includes components like oil, glass window, and tubehead seal. A leaded PID is not part of inherent filtration."
  },
  {
    "question": "Which is the most effective method of reducing patient exposure to radiation?",
    "answers": [
      {"text": "lead apron", "correct": false},
      {"text": "fast films", "correct": true},
      {"text": "circular PID", "correct": false},
      {"text": "film-holding devices", "correct": false}
    ],
    "explanation": "Using fast films reduces the amount of radiation needed to produce an image, thereby effectively reducing patient exposure."
  },
  {
    "question": "Which position-indicating device is most effective in reducing patient exposure?",
    "answers": [
      {"text": "conical", "correct": false},
      {"text": "rectangular", "correct": true},
      {"text": "circular", "correct": false},
      {"text": "all are equally effective in reducing patient exposure", "correct": false}
    ],
    "explanation": "Rectangular PIDs restrict the beam size more than conical or circular PIDs, significantly reducing patient exposure."
  },
  {
    "question": "Which device restricts the size and shape of the x-ray beam?",
    "answers": [
      {"text": "filter", "correct": false},
      {"text": "collimator", "correct": true},
      {"text": "barrier", "correct": false},
      {"text": "film badge", "correct": false}
    ],
    "explanation": "The collimator restricts the size and shape of the x-ray beam to reduce patient exposure."
  },
  {
    "question": "Which material is used as a collimator?",
    "answers": [
      {"text": "lead", "correct": true},
      {"text": "aluminum", "correct": false},
      {"text": "copper", "correct": false},
      {"text": "all of the above", "correct": false}
    ],
    "explanation": "Lead is commonly used as a collimator material due to its ability to absorb x-rays effectively."
  },
  {
    "question": "Which describes the function of filtration?",
    "answers": [
      {"text": "increases scatter radiation", "correct": false},
      {"text": "increases divergent rays", "correct": false},
      {"text": "increases long wavelengths", "correct": false},
      {"text": "reduces low-energy waves", "correct": true}
    ],
    "explanation": "Filtration reduces low-energy x-rays (long wavelengths) that contribute to patient dose without improving image quality."
  },
  {
    "question": "Which is the recommended size of the beam at the patient’s face?",
    "answers": [
      {"text": "2.75 inches", "correct": true},
      {"text": "3.25 inches", "correct": false},
      {"text": "3.50 inches", "correct": false},
      {"text": "4.00 inches", "correct": false}
    ],
    "explanation": "The recommended beam size at the patient's face is approximately 2.75 inches to minimize exposure."
  },
  {
    "question": "Which term describes the dose of radiation that the body can endure with little or no chance of injury?",
    "answers": [
      {"text": "radiation limit", "correct": false},
      {"text": "maximum permissible dose", "correct": true},
      {"text": "occupationally exposed dose", "correct": false},
      {"text": "ALARA", "correct": false}
    ],
    "explanation": "Maximum permissible dose (MPD) is the highest dose of radiation that a person can receive with minimal risk of injury."
  },
  {
    "question": "Which statement is true of a radiation monitoring badge?",
    "answers": [
      {"text": "It should be worn when the radiographer is undergoing x-ray exposure.", "correct": true},
      {"text": "It can be shared between employees.", "correct": false},
      {"text": "It should be worn at waist level when exposing x-ray receptors.", "correct": false},
      {"text": "All of the above are true.", "correct": false}
    ],
    "explanation": "Radiation monitoring badges should be worn by individual radiographers during exposure to monitor accumulated radiation dose and should not be shared."
  },
// Chapter 6 Dental X-ray Equipment

  {
    "question": "A dental radiographer prepares to take an intraoral radiograph and adjusts the part of the machine that contains the x-ray–producing component. Which structure is being manipulated?",
    "answers": [
      {"text": "Extension arm", "correct": false},
      {"text": "Control panel", "correct": false},
      {"text": "Tubehead", "correct": true},
      {"text": "Receptor holder", "correct": false},
      {"text": "Beam alignment device", "correct": false}
    ],
    "explanation": "The tubehead (tube housing) contains the x-ray tube, which is responsible for producing dental x-rays. It is the primary source of radiation in the machine."
  },
  {
    "question": "During positioning, the radiographer moves a component that supports the tubehead and allows smooth repositioning while enclosing electrical wires. Which component is this?",
    "answers": [
      {"text": "Position-indicating device", "correct": false},
      {"text": "Control panel", "correct": false},
      {"text": "Extension arm", "correct": true},
      {"text": "Collimator", "correct": false},
      {"text": "Receptor holder", "correct": false}
    ],
    "explanation": "The extension arm suspends the tubehead, houses electrical wires, and enables movement and positioning of the x-ray tubehead."
  },
  {
    "question": "A student presses the exposure button briefly and releases it before the exposure cycle completes. The resulting image is nondiagnostic. What is the MOST likely cause?",
    "answers": [
      {"text": "Excessive kilovoltage", "correct": false},
      {"text": "Insufficient milliamperage", "correct": false},
      {"text": "Incomplete exposure time", "correct": true},
      {"text": "Improper filtration", "correct": false},
      {"text": "Beam misalignment", "correct": false}
    ],
    "explanation": "The exposure button must be held down for the entire preset exposure time. Releasing it early results in underexposure and a nondiagnostic image."
  },
  {
    "question": "A dental assistant hears a beeping sound during radiographic exposure. What does this sound indicate?",
    "answers": [
      {"text": "The machine is overheating", "correct": false},
      {"text": "The receptor is properly aligned", "correct": false},
      {"text": "X-rays are being produced", "correct": true},
      {"text": "The exposure time has ended", "correct": false},
      {"text": "The PID is correctly positioned", "correct": false}
    ],
    "explanation": "An audible beep signals that x-rays are actively being generated, serving as a safety indicator during exposure."
  },
  {
    "question": "Which control panel component directly determines how long the patient is exposed to radiation?",
    "answers": [
      {"text": "Kilovoltage selector", "correct": false},
      {"text": "Milliamperage selector", "correct": false},
      {"text": "Timer", "correct": true},
      {"text": "Exposure button", "correct": false},
      {"text": "Indicator light", "correct": false}
    ],
    "explanation": "The timer regulates the duration of exposure, measured in seconds, and directly affects radiation dose and image density."
  },
  {
    "question": "A dentist selects a device to hold the receptor in the patient’s mouth, eliminating the need for the patient to stabilize it. What is this device?",
    "answers": [
      {"text": "Beam alignment device", "correct": false},
      {"text": "Collimator", "correct": false},
      {"text": "Receptor holder", "correct": true},
      {"text": "PID", "correct": false},
      {"text": "Control panel", "correct": false}
    ],
    "explanation": "A receptor holder stabilizes and aligns intraoral receptors, reducing movement and eliminating the need for patients to hold them."
  },
  {
    "question": "A radiographer uses a Snap-A-Ray device during imaging. What is its PRIMARY function?",
    "answers": [
      {"text": "Filtering low-energy x-rays", "correct": false},
      {"text": "Directing the x-ray beam", "correct": false},
      {"text": "Holding the receptor securely in position", "correct": true},
      {"text": "Restricting beam size", "correct": false},
      {"text": "Measuring radiation dose", "correct": false}
    ],
    "explanation": "The Snap-A-Ray is a molded-plastic receptor holder that grips and stabilizes the receptor, improving positioning and reducing retakes."
  },
  {
    "question": "Which component allows the radiographer to regulate factors such as exposure time, and sometimes kilovoltage and milliamperage?",
    "answers": [
      {"text": "Tubehead", "correct": false},
      {"text": "Extension arm", "correct": false},
      {"text": "Control panel", "correct": true},
      {"text": "PID", "correct": false},
      {"text": "Receptor holder", "correct": false}
    ],
    "explanation": "The control panel contains switches and selectors (timer, kV, mA) that regulate the x-ray beam and overall exposure settings."
  },
  {
    "question": "A beam alignment device is used during intraoral radiography. What is its PRIMARY purpose?",
    "answers": [
      {"text": "To increase beam intensity", "correct": false},
      {"text": "To position the PID relative to the tooth and receptor", "correct": true},
      {"text": "To filter low-energy radiation", "correct": false},
      {"text": "To stabilize the tubehead", "correct": false},
      {"text": "To measure radiation dose", "correct": false}
    ],
    "explanation": "Beam alignment devices ensure accurate positioning of the PID, improving image accuracy and reducing retakes."
  },
  {
    "question": "A collimating device is added to an x-ray unit. What is its MAIN function?",
    "answers": [
      {"text": "Increase exposure time", "correct": false},
      {"text": "Reduce scatter radiation after exposure", "correct": false},
      {"text": "Restrict the size of the x-ray beam", "correct": true},
      {"text": "Stabilize the receptor", "correct": false},
      {"text": "Enhance image contrast", "correct": false}
    ],
    "explanation": "A collimator (lead plate with a central opening) restricts the size and shape of the beam, reducing patient exposure and improving safety."
  },
  {
    "question": "A portable dental x-ray unit is used in a community outreach program. What is the PRIMARY advantage of this equipment?",
    "answers": [
      {"text": "Higher radiation output", "correct": false},
      {"text": "Use only for extraoral imaging", "correct": false},
      {"text": "Ability to perform radiography outside the dental office", "correct": true},
      {"text": "Elimination of need for shielding", "correct": false},
      {"text": "Automatic exposure control", "correct": false}
    ],
    "explanation": "Portable units allow radiographic procedures in non-clinical settings, increasing access to care while maintaining diagnostic capability."
  },
  {
    "question": "A clinic undergoes inspection to ensure compliance with radiation safety laws. What is typically required for dental x-ray equipment?",
    "answers": [
      {"text": "Annual replacement of tubeheads", "correct": false},
      {"text": "Registration, inspection, and periodic monitoring", "correct": true},
      {"text": "Daily recalibration of kVp and mA", "correct": false},
      {"text": "Replacement of PID every 6 months", "correct": false},
      {"text": "Elimination of portable units", "correct": false}
    ],
    "explanation": "State and local regulations require that dental x-ray equipment be registered, inspected, and monitored periodically to ensure safety and compliance."
  },

  {
    "question": "Dental receptors placed inside the mouth are termed:",
    "answers": [
      {"text": "intraoral", "correct": true},
      {"text": "extraoral", "correct": false},
      {"text": "occlusal", "correct": false},
      {"text": "all of the above", "correct": false}
    ],
    "explanation": "Dental receptors placed inside the mouth are called intraoral receptors, used for capturing images of teeth and surrounding structures."
  },
  {
    "question": "The component part of the dental x-ray machine that contains the x-ray tube is termed the:",
    "answers": [
      {"text": "control panel", "correct": false},
      {"text": "tubehead", "correct": true},
      {"text": "extension arm", "correct": false},
      {"text": "console", "correct": false}
    ],
    "explanation": "The tubehead contains the x-ray tube, which produces the x-rays used in dental imaging."
  },
  {
    "question": "The component part of the dental x-ray machine that allows movement and positioning of the tubehead is termed the:",
    "answers": [
      {"text": "control panel", "correct": false},
      {"text": "extension arm", "correct": true},
      {"text": "console", "correct": false},
      {"text": "position-indicating device (PID)", "correct": false}
    ],
    "explanation": "The extension arm supports the tubehead and allows it to be moved and positioned as needed."
  },
  {
    "question": "The dental radiographer can regulate the x-ray beam (kilovoltage, milliamperage, time) through the use of the:",
    "answers": [
      {"text": "control panel", "correct": true},
      {"text": "extension arm", "correct": false},
      {"text": "tubehead", "correct": false},
      {"text": "PID", "correct": false}
    ],
    "explanation": "The control panel contains the controls for adjusting exposure factors such as kV, mA, and time."
  },
  {
    "question": "An instrument that is used to help the dental radiographer position the PID in relation to the tooth and receptor is the:",
    "answers": [
      {"text": "receptor holder", "correct": false},
      {"text": "beam alignment device", "correct": true},
      {"text": "collimating device", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Beam alignment devices assist in positioning the PID accurately relative to the tooth and receptor."
  },
  {
    "question": "A device that is used to stabilize an intraoral receptor is termed:",
    "answers": [
      {"text": "beam alignment", "correct": false},
      {"text": "collimator", "correct": false},
      {"text": "receptor holder", "correct": true},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Receptor holders stabilize and hold the intraoral receptor in place during exposure."
  },
  {
    "question": "Which one is used to restrict the size of the x-ray beam to the size of an intraoral receptor?",
    "answers": [
      {"text": "collimating device", "correct": true},
      {"text": "receptor holder", "correct": false},
      {"text": "beam alignment device", "correct": false},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Collimating devices restrict the size and shape of the x-ray beam to reduce patient exposure and match the receptor size."
  },
  // Chapter 7 Dental X-ray Film

  {
    "question": "A dental student explains that an intraoral radiograph forms when the x-ray beam interacts with a material that records the image. Which term BEST describes this material?",
    "answers": [
      {"text": "Emitter", "correct": false},
      {"text": "Collimator", "correct": false},
      {"text": "Image receptor", "correct": true},
      {"text": "Filtration medium", "correct": false},
      {"text": "Beam restrictor", "correct": false}
    ],
    "explanation": "The dental x-ray film is an image receptor, meaning it responds to radiation (stimulus) and records an image (a representation of the object exposed)."
  },
  {
    "question": "A clinician accidentally damages the outermost coating of an x-ray film before processing. Which component was MOST likely affected?",
    "answers": [
      {"text": "Film base", "correct": false},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Film emulsion", "correct": false},
      {"text": "Protective layer", "correct": true},
      {"text": "Silver halide crystals", "correct": false}
    ],
    "explanation": "The protective layer is the outermost coating that shields the emulsion from mechanical damage and handling."
  },
  {
    "question": "During film manufacturing, a layer is added specifically to bind the emulsion to the base. Which layer performs this function?",
    "answers": [
      {"text": "Film base", "correct": false},
      {"text": "Adhesive layer", "correct": true},
      {"text": "Protective layer", "correct": false},
      {"text": "Gelatin matrix", "correct": false},
      {"text": "Silver halide layer", "correct": false}
    ],
    "explanation": "The adhesive layer attaches the emulsion securely to both sides of the film base, ensuring structural integrity."
  },
  {
    "question": "A radiograph shows improved contrast due to a slightly blue-tinted transparent backing. Which component is responsible?",
    "answers": [
      {"text": "Protective layer", "correct": false},
      {"text": "Film base", "correct": true},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Emulsion", "correct": false},
      {"text": "Gelatin", "correct": false}
    ],
    "explanation": "The film base is transparent with a slight blue tint, which enhances contrast and improves image quality while providing structural support."
  },
  {
    "question": "A dental radiographer explains that the film emulsion contains materials that store energy from x-radiation exposure. Which component is responsible for this function?",
    "answers": [
      {"text": "Gelatin", "correct": false},
      {"text": "Polyester base", "correct": false},
      {"text": "Silver halide crystals", "correct": true},
      {"text": "Protective coating", "correct": false},
      {"text": "Adhesive layer", "correct": false}
    ],
    "explanation": "Silver halide crystals absorb x-radiation and store energy, forming the latent image that becomes visible after processing."
  },
  {
    "question": "During processing, a component of the film absorbs chemicals and allows them to react with radiation-sensitive crystals. What is this component?",
    "answers": [
      {"text": "Film base", "correct": false},
      {"text": "Protective layer", "correct": false},
      {"text": "Gelatin", "correct": true},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Polyester backing", "correct": false}
    ],
    "explanation": "The gelatin matrix suspends the silver halide crystals and absorbs processing solutions, enabling chemical reactions necessary for image formation."
  },
  {
    "question": "Which combination BEST represents the composition of silver halide crystals in dental x-ray film?",
    "answers": [
      {"text": "Silver and oxygen", "correct": false},
      {"text": "Silver and nitrogen", "correct": false},
      {"text": "Silver with bromine or iodine", "correct": true},
      {"text": "Silver and carbon", "correct": false},
      {"text": "Silver and hydrogen", "correct": false}
    ],
    "explanation": "Silver halide crystals consist of silver combined with halogens, specifically bromine (AgBr) or iodine (AgI), which are sensitive to radiation."
  },
  {
    "question": "A film emulsion contains predominantly silver bromide crystals. What is the typical percentage range of silver bromide in dental film?",
    "answers": [
      {"text": "10% to 20%", "correct": false},
      {"text": "20% to 40%", "correct": false},
      {"text": "50% to 70%", "correct": false},
      {"text": "80% to 99%", "correct": true},
      {"text": "100%", "correct": false}
    ],
    "explanation": "Dental film emulsion typically contains 80%–99% silver bromide and 1%–10% silver iodide, optimizing sensitivity to radiation."
  },
  {
    "question": "A radiograph is underexposed because the film failed to respond adequately to x-radiation. Which component is MOST directly responsible for this failure?",
    "answers": [
      {"text": "Film base", "correct": false},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Protective layer", "correct": false},
      {"text": "Silver halide crystals", "correct": true},
      {"text": "Polyester backing", "correct": false}
    ],
    "explanation": "The silver halide crystals are the radiation-sensitive elements that absorb x-rays and store energy. Failure in this component leads to inadequate image formation."
  },
  {
    "question": "A dental assistant bends an x-ray film, causing structural distortion but not affecting the image-forming layer directly. Which component was primarily affected?",
    "answers": [
      {"text": "Protective layer", "correct": false},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Film base", "correct": true},
      {"text": "Emulsion", "correct": false},
      {"text": "Silver halide crystals", "correct": false}
    ],
    "explanation": "The film base provides strength and flexibility. Bending affects this structural support but does not directly alter the emulsion unless severe."
  },
  {
    "question": "Which of the following BEST explains why the film emulsion is coated on both sides of the film base?",
    "answers": [
      {"text": "To increase mechanical strength", "correct": false},
      {"text": "To enhance film sensitivity to radiation", "correct": true},
      {"text": "To reduce processing time", "correct": false},
      {"text": "To prevent chemical absorption", "correct": false},
      {"text": "To improve film durability", "correct": false}
    ],
    "explanation": "Coating emulsion on both sides increases film sensitivity, allowing more efficient absorption of radiation and better image formation."
  },
  {
    "question": "A dental radiographer describes a “homogeneous mixture of gelatin and radiation-sensitive crystals.” Which component is being described?",
    "answers": [
      {"text": "Film base", "correct": false},
      {"text": "Adhesive layer", "correct": false},
      {"text": "Film emulsion", "correct": true},
      {"text": "Protective layer", "correct": false},
      {"text": "Polyester backing", "correct": false}
    ],
    "explanation": "The film emulsion is composed of gelatin and silver halide crystals, forming the active layer responsible for capturing the latent image."
  },

  {
    "question": "A dentist selects a film that will be placed inside the patient’s mouth to evaluate caries and supporting bone. Which type of film is being used?",
    "answers": [
      {"text": "Extraoral film", "correct": false},
      {"text": "Duplicating film", "correct": false},
      {"text": "Intraoral film", "correct": true},
      {"text": "Panoramic film", "correct": false},
      {"text": "Cephalometric film", "correct": false}
    ],
    "explanation": "Intraoral film is placed inside the mouth and is used to examine teeth and their supporting structures."
  },
  {
    "question": "A student is asked to identify all components of an intraoral film packet. Which set is correct?",
    "answers": [
      {"text": "Film base, emulsion, gelatin, protective layer", "correct": false},
      {"text": "X-ray film, paper wrapper, lead foil, outer wrapping", "correct": true},
      {"text": "Tubehead, PID, receptor, collimator", "correct": false},
      {"text": "Film, developer, fixer, water", "correct": false},
      {"text": "Film, adhesive layer, gelatin, plastic", "correct": false}
    ],
    "explanation": "An intraoral film packet contains four components: x-ray film, paper wrapper, lead foil sheet, and outer wrapping."
  },
  {
    "question": "A processed radiograph shows generalized fogging due to backscattered radiation. Which component of the film packet likely failed or was absent?",
    "answers": [
      {"text": "Outer wrapping", "correct": false},
      {"text": "Paper wrapper", "correct": false},
      {"text": "Lead foil sheet", "correct": true},
      {"text": "Identification dot", "correct": false},
      {"text": "Film base", "correct": false}
    ],
    "explanation": "The lead foil sheet is placed behind the film to absorb backscattered radiation and prevent fogging. Its absence leads to increased image fog."
  },
  {
    "question": "During exposure, x-ray photons interact with silver halide crystals. What is the FIRST event in latent image formation?",
    "answers": [
      {"text": "Conversion to metallic silver", "correct": false},
      {"text": "Attraction of bromine ions", "correct": false},
      {"text": "Release of electrons", "correct": true},
      {"text": "Formation of gelatin matrix", "correct": false},
      {"text": "Dissolution of halide ions", "correct": false}
    ],
    "explanation": "X-ray photons release electrons from silver halide crystals, initiating the process that leads to latent image formation."
  },
  {
    "question": "A latent image site is formed when which of the following occurs?",
    "answers": [
      {"text": "Bromine atoms bind to gelatin", "correct": false},
      {"text": "Silver ions lose electrons", "correct": false},
      {"text": "Silver ions gain electrons and become neutral atoms", "correct": true},
      {"text": "Gelatin absorbs radiation", "correct": false},
      {"text": "Film base changes color", "correct": false}
    ],
    "explanation": "At sensitivity sites, silver ions gain electrons and become neutral silver atoms, forming latent image sites."
  },
  {
    "question": "During film processing, what is the PRIMARY role of the developer solution?",
    "answers": [
      {"text": "Remove gelatin from film", "correct": false},
      {"text": "Convert silver ions into metallic silver", "correct": true},
      {"text": "Dissolve film base", "correct": false},
      {"text": "Add silver halide crystals", "correct": false},
      {"text": "Reduce exposure time", "correct": false}
    ],
    "explanation": "The developer converts silver ions at latent image sites into metallic silver, producing the visible radiographic image."
  },
  {
    "question": "A dental assistant places the film packet incorrectly with the label side facing the teeth. What is the MOST likely consequence?",
    "answers": [
      {"text": "Increased image sharpness", "correct": false},
      {"text": "Reduced exposure time", "correct": false},
      {"text": "Reversed or poor-quality image", "correct": true},
      {"text": "Improved contrast", "correct": false},
      {"text": "Elimination of scatter radiation", "correct": false}
    ],
    "explanation": "The white (tube) side must face the teeth and tubehead. Incorrect placement results in image errors such as reversed images and reduced quality."
  },
  {
    "question": "A clinician uses the phrase “white in sight” when placing a film packet. What does this refer to?",
    "answers": [
      {"text": "The film base color", "correct": false},
      {"text": "The label side facing outward", "correct": false},
      {"text": "The white tube side facing the teeth and tubehead", "correct": true},
      {"text": "The protective layer visibility", "correct": false},
      {"text": "The developer solution color", "correct": false}
    ],
    "explanation": "“White in sight” means the white tube side of the film packet faces the teeth and x-ray source for correct orientation."
  },
  {
    "question": "After processing, the dentist uses a raised bump on the radiograph to determine orientation. What is this feature called?",
    "answers": [
      {"text": "Lead marker", "correct": false},
      {"text": "Orientation tab", "correct": false},
      {"text": "Identification dot", "correct": true},
      {"text": "Film base marker", "correct": false},
      {"text": "Sensitivity site", "correct": false}
    ],
    "explanation": "The identification dot is used to determine film orientation and distinguish left from right during mounting."
  },
  {
    "question": "Which side of the film packet should face the tongue during placement?",
    "answers": [
      {"text": "Tube side", "correct": false},
      {"text": "White side", "correct": false},
      {"text": "Label side", "correct": true},
      {"text": "Lead foil side", "correct": false},
      {"text": "Film base side", "correct": false}
    ],
    "explanation": "The label side (color-coded) faces the tongue, while the white tube side faces the teeth and x-ray source."
  },
  {
    "question": "What is the PRIMARY function of the paper film wrapper inside the packet?",
    "answers": [
      {"text": "Absorb radiation", "correct": false},
      {"text": "Shield the film from light", "correct": true},
      {"text": "Provide structural support", "correct": false},
      {"text": "Reduce scatter radiation", "correct": false},
      {"text": "Enhance contrast", "correct": false}
    ],
    "explanation": "The paper wrapper protects the film from light exposure, preventing premature image formation or damage."
  },
  {
    "question": "A clinician explains that the latent image is invisible until processing. What BEST describes the latent image?",
    "answers": [
      {"text": "A visible silver deposit", "correct": false},
      {"text": "A collection of neutral silver atoms at sensitivity sites", "correct": true},
      {"text": "A pattern of gelatin crystals", "correct": false},
      {"text": "A chemical stain on the film base", "correct": false},
      {"text": "A layer of bromine ions", "correct": false}
    ],
    "explanation": "The latent image consists of accumulated neutral silver atoms at sensitivity sites, which become visible only after development."
  },

  {
    "question": "A 30-year-old patient presents with suspected periapical pathology involving the apex of a mandibular molar. Which film is MOST appropriate?",
    "answers": [
      {"text": "Bite-wing film", "correct": false},
      {"text": "Occlusal film", "correct": false},
      {"text": "Periapical film", "correct": true},
      {"text": "Duplicating film", "correct": false},
      {"text": "Extraoral film", "correct": false}
    ],
    "explanation": "Periapical films are designed to capture the entire tooth (crown and root) and surrounding supporting bone, making them ideal for evaluating periapical pathology."
  },
  {
    "question": "A clinician wants to evaluate interproximal caries between maxillary and mandibular molars on the same image. Which film type should be selected?",
    "answers": [
      {"text": "Periapical film", "correct": false},
      {"text": "Occlusal film", "correct": false},
      {"text": "Bite-wing film", "correct": true},
      {"text": "Panoramic film", "correct": false},
      {"text": "Cephalometric film", "correct": false}
    ],
    "explanation": "Bite-wing films are specifically used to visualize crowns of both arches simultaneously and are particularly useful for detecting interproximal caries."
  },
  {
    "question": "A dentist needs to evaluate a large cystic lesion involving a broad area of the mandible. Which intraoral film is MOST appropriate?",
    "answers": [
      {"text": "Periapical film", "correct": false},
      {"text": "Bite-wing film", "correct": false},
      {"text": "Occlusal film", "correct": true},
      {"text": "Size 1 film", "correct": false},
      {"text": "Size 0 film", "correct": false}
    ],
    "explanation": "Occlusal films are the largest intraoral films and are used to examine large areas of the maxilla or mandible, such as cysts or fractures."
  },
  {
    "question": "A pediatric patient requires imaging of posterior teeth. Which bite-wing film size is MOST appropriate?",
    "answers": [
      {"text": "Size 0", "correct": true},
      {"text": "Size 1", "correct": false},
      {"text": "Size 2", "correct": false},
      {"text": "Size 3", "correct": false},
      {"text": "Size 4", "correct": false}
    ],
    "explanation": "Size 0 bite-wing film is specifically designed for small children to examine posterior teeth."
  },
  {
    "question": "Which intraoral film size is considered the standard for adult periapical imaging?",
    "answers": [
      {"text": "Size 0", "correct": false},
      {"text": "Size 1", "correct": false},
      {"text": "Size 2", "correct": true},
      {"text": "Size 3", "correct": false},
      {"text": "Size 4", "correct": false}
    ],
    "explanation": "Size 2 periapical film is the standard intraoral film used for imaging both anterior and posterior teeth in adults."
  },
  {
    "question": "A radiographer selects a film that captures all posterior teeth on one side of the arch in a single image. Which film is this?",
    "answers": [
      {"text": "Size 2 periapical", "correct": false},
      {"text": "Size 3 bite-wing", "correct": true},
      {"text": "Size 4 occlusal", "correct": false},
      {"text": "Size 1 periapical", "correct": false},
      {"text": "Size 0 bite-wing", "correct": false}
    ],
    "explanation": "Size 3 bite-wing film is longer and narrower, allowing visualization of all posterior teeth on one side in a single radiograph."
  },
  {
    "question": "Which periapical film size is MOST appropriate for imaging anterior teeth in an adult?",
    "answers": [
      {"text": "Size 0", "correct": false},
      {"text": "Size 1", "correct": true},
      {"text": "Size 2", "correct": false},
      {"text": "Size 3", "correct": false},
      {"text": "Size 4", "correct": false}
    ],
    "explanation": "Size 1 periapical film is primarily used for anterior teeth in adults, providing appropriate coverage and comfort."
  },
  {
    "question": "A dental student states that larger film numbers correspond to smaller film sizes. What is the BEST correction?",
    "answers": [
      {"text": "Correct for bite-wing films only", "correct": false},
      {"text": "Correct for occlusal films only", "correct": false},
      {"text": "Incorrect; larger numbers indicate larger film sizes", "correct": true},
      {"text": "Correct for periapical films only", "correct": false},
      {"text": "Irrelevant to intraoral films", "correct": false}
    ],
    "explanation": "In intraoral films, the larger the number, the larger the film size, accommodating different anatomical needs."
  },
  {
    "question": "A clinician selects a film that is nearly four times larger than a standard size 2 periapical film. Which film is this?",
    "answers": [
      {"text": "Size 2 bite-wing", "correct": false},
      {"text": "Size 3 bite-wing", "correct": false},
      {"text": "Size 4 occlusal", "correct": true},
      {"text": "Size 1 periapical", "correct": false},
      {"text": "Size 0 occlusal", "correct": false}
    ],
    "explanation": "Size 4 occlusal film is the largest intraoral film and is approximately four times larger than a size 2 periapical film."
  },
  {
    "question": "A patient requires imaging of both maxillary and mandibular crowns simultaneously. Which feature BEST describes the selected film?",
    "answers": [
      {"text": "Shows entire tooth and root", "correct": false},
      {"text": "Captures large jaw areas", "correct": false},
      {"text": "Records crowns of both arches on one film", "correct": true},
      {"text": "Used only for anterior teeth", "correct": false},
      {"text": "Used only in children", "correct": false}
    ],
    "explanation": "Bite-wing films are designed to capture crowns of both maxillary and mandibular teeth in a single image."
  },
  {
    "question": "Which intraoral film type is MOST useful for detecting early interproximal caries?",
    "answers": [
      {"text": "Periapical film", "correct": false},
      {"text": "Occlusal film", "correct": false},
      {"text": "Bite-wing film", "correct": true},
      {"text": "Size 4 film", "correct": false},
      {"text": "Duplicating film", "correct": false}
    ],
    "explanation": "Bite-wing radiographs are the best choice for detecting interproximal caries, as they clearly show contact areas between adjacent teeth."
  },
  {
    "question": "A very young child requires a periapical radiograph. Which film size is MOST appropriate?",
    "answers": [
      {"text": "Size 0", "correct": true},
      {"text": "Size 1", "correct": false},
      {"text": "Size 2", "correct": false},
      {"text": "Size 3", "correct": false},
      {"text": "Size 4", "correct": false}
    ],
    "explanation": "Size 0 periapical film is the smallest and is specifically used for very small children, ensuring comfort and proper fit."
  },

  {
    "question": "A clinician switches from D-speed to F-speed intraoral film for routine radiographs. What is the PRIMARY advantage of this change?",
    "answers": [
      {"text": "Improved image magnification", "correct": false},
      {"text": "Reduced radiation exposure to the patient", "correct": true},
      {"text": "Increased exposure time", "correct": false},
      {"text": "Reduced film thickness", "correct": false},
      {"text": "Elimination of processing steps", "correct": false}
    ],
    "explanation": "F-speed film is faster and requires less radiation exposure to produce a diagnostic image, aligning with radiation protection principles."
  },
  {
    "question": "A radiograph is produced using minimal exposure time due to high film sensitivity. Which factor MOST directly determines this sensitivity?",
    "answers": [
      {"text": "Film base thickness", "correct": false},
      {"text": "Silver halide crystal size", "correct": true},
      {"text": "Lead foil thickness", "correct": false},
      {"text": "Protective layer composition", "correct": false},
      {"text": "Outer wrapping color", "correct": false}
    ],
    "explanation": "Film speed (sensitivity) is largely determined by the size of silver halide crystals—larger crystals result in faster film speed and less required exposure."
  },
  {
    "question": "A dental student states that slower films require less radiation. Which correction is MOST accurate?",
    "answers": [
      {"text": "Correct for F-speed film", "correct": false},
      {"text": "Correct only for E-speed film", "correct": false},
      {"text": "Incorrect; slower films require more radiation", "correct": true},
      {"text": "Correct for digital sensors", "correct": false},
      {"text": "Irrelevant to film speed", "correct": false}
    ],
    "explanation": "Slower films (e.g., D-speed) require more radiation and longer exposure time, while faster films require less."
  },
  {
    "question": "Which of the following factors does NOT influence film speed?",
    "answers": [
      {"text": "Size of silver halide crystals", "correct": false},
      {"text": "Thickness of emulsion", "correct": false},
      {"text": "Presence of radiosensitive dyes", "correct": false},
      {"text": "Color of outer film wrapper", "correct": true},
      {"text": "Amount of silver bromide", "correct": false}
    ],
    "explanation": "Film speed depends on crystal size, emulsion thickness, and dyes, not on packaging characteristics like wrapper color."
  },
  {
    "question": "A radiographer notes that a film requires only 60% of the exposure time compared with D-speed film. Which film is being used?",
    "answers": [
      {"text": "A-speed", "correct": false},
      {"text": "D-speed", "correct": false},
      {"text": "E-speed", "correct": false},
      {"text": "F-speed", "correct": true},
      {"text": "Duplicating film", "correct": false}
    ],
    "explanation": "F-speed film requires about 60% of the exposure time of D-speed film, significantly reducing radiation dose."
  },
  {
    "question": "Which statement BEST explains why F-speed film is faster than D-speed film?",
    "answers": [
      {"text": "It has a thinner film base", "correct": false},
      {"text": "It contains smaller silver halide crystals", "correct": false},
      {"text": "It has larger crystals and more silver bromide", "correct": true},
      {"text": "It uses less gelatin", "correct": false},
      {"text": "It eliminates the need for processing", "correct": false}
    ],
    "explanation": "F-speed film is faster because it contains larger silver halide crystals and increased silver bromide content, enhancing sensitivity."
  },
  {
    "question": "A clinician wants to minimize patient radiation exposure while maintaining diagnostic image quality. Which film is MOST appropriate?",
    "answers": [
      {"text": "A-speed film", "correct": false},
      {"text": "D-speed film", "correct": false},
      {"text": "E-speed film", "correct": false},
      {"text": "F-speed film", "correct": true},
      {"text": "Duplicating film", "correct": false}
    ],
    "explanation": "The ADA and AAOMR recommend F-speed film because it minimizes radiation exposure while maintaining acceptable image quality."
  },
  {
    "question": "Which of the following BEST defines film speed?",
    "answers": [
      {"text": "The time required to process a film", "correct": false},
      {"text": "The density of the film base", "correct": false},
      {"text": "The amount of radiation needed to produce a standard image", "correct": true},
      {"text": "The thickness of the protective layer", "correct": false},
      {"text": "The number of films per box", "correct": false}
    ],
    "explanation": "Film speed refers to the amount of radiation required to produce a radiograph of standard density, reflecting film sensitivity."
  },
  {
    "question": "A radiograph appears underexposed when using a slow film. What adjustment would BEST compensate for this?",
    "answers": [
      {"text": "Decrease exposure time", "correct": false},
      {"text": "Increase exposure time", "correct": true},
      {"text": "Decrease kVp", "correct": false},
      {"text": "Use smaller crystals", "correct": false},
      {"text": "Reduce emulsion thickness", "correct": false}
    ],
    "explanation": "Slow films require greater exposure time or radiation dose to achieve proper image density."
  },
  {
    "question": "Which film speed is considered the slowest among those listed?",
    "answers": [
      {"text": "A-speed", "correct": true},
      {"text": "D-speed", "correct": false},
      {"text": "E-speed", "correct": false},
      {"text": "F-speed", "correct": false},
      {"text": "E/F-speed", "correct": false}
    ],
    "explanation": "Film speeds range from A (slowest) to F (fastest). A-speed requires the highest radiation dose."
  },
  {
    "question": "Which factor contributes to the stability of contrast in modern F-speed films?",
    "answers": [
      {"text": "Reduced crystal size", "correct": false},
      {"text": "Uniform outer packaging", "correct": false},
      {"text": "Improved processing tolerance", "correct": true},
      {"text": "Absence of silver bromide", "correct": false},
      {"text": "Thinner emulsion", "correct": false}
    ],
    "explanation": "Modern F-speed films provide stable contrast characteristics under varying processing conditions, enhancing diagnostic reliability."
  },
  {
    "question": "A dental assistant compares two films: one with thicker emulsion and one with thinner emulsion. Which statement is MOST accurate?",
    "answers": [
      {"text": "Thinner emulsion increases film speed", "correct": false},
      {"text": "Thicker emulsion increases film speed", "correct": true},
      {"text": "Emulsion thickness does not affect speed", "correct": false},
      {"text": "Only crystal size affects speed", "correct": false},
      {"text": "Only dyes affect speed", "correct": false}
    ],
    "explanation": "Thicker emulsion contains more silver halide crystals, increasing the likelihood of interaction with x-rays and thus increasing film speed."
  },

  {
    "question": "A panoramic radiograph is taken using a cassette with intensifying screens. What is the PRIMARY mechanism by which the film is exposed?",
    "answers": [
      {"text": "Direct interaction with x-rays", "correct": false},
      {"text": "Conversion of x-rays into visible light", "correct": true},
      {"text": "Chemical activation of gelatin", "correct": false},
      {"text": "Heat activation of emulsion", "correct": false},
      {"text": "Electrical stimulation of crystals", "correct": false}
    ],
    "explanation": "In screen film systems, intensifying screens convert x-ray energy into visible light, which then exposes the film, reducing the amount of radiation required."
  },
  {
    "question": "A dental student uses a nonscreen extraoral film for imaging and notices the need for a longer exposure time. What explains this observation?",
    "answers": [
      {"text": "The film is more sensitive to light", "correct": false},
      {"text": "The film lacks silver halide crystals", "correct": false},
      {"text": "The film is exposed directly to x-rays", "correct": true},
      {"text": "The cassette blocks radiation", "correct": false},
      {"text": "The film uses duplicating technology", "correct": false}
    ],
    "explanation": "Nonscreen films are directly exposed to x-rays and lack intensifying screens, requiring greater exposure time and higher radiation dose."
  },
  {
    "question": "Which of the following is the BEST reason nonscreen films are not recommended in dental radiography?",
    "answers": [
      {"text": "Poor image resolution", "correct": false},
      {"text": "Excessive radiation exposure required", "correct": true},
      {"text": "Incompatibility with cassettes", "correct": false},
      {"text": "Inability to produce latent images", "correct": false},
      {"text": "High cost", "correct": false}
    ],
    "explanation": "Nonscreen films require more radiation exposure, making them less safe and therefore not recommended in dental practice."
  },
  {
    "question": "A dentist needs to send a copy of a radiograph to a specialist without risking loss of the original. Which film should be used?",
    "answers": [
      {"text": "Intraoral film", "correct": false},
      {"text": "Extraoral film", "correct": false},
      {"text": "Screen film", "correct": false},
      {"text": "Duplicating film", "correct": true},
      {"text": "Nonscreen film", "correct": false}
    ],
    "explanation": "Duplicating film is specifically used to create identical copies of radiographs for referrals, insurance, and teaching."
  },
  {
    "question": "A dental assistant attempts to expose duplicating film using x-rays. What is the expected outcome?",
    "answers": [
      {"text": "A clearer duplicate image", "correct": false},
      {"text": "No image formation", "correct": true},
      {"text": "Overexposed radiograph", "correct": false},
      {"text": "Reduced contrast image", "correct": false},
      {"text": "Enhanced latent image", "correct": false}
    ],
    "explanation": "Duplicating film is not exposed to x-radiation; it is used in a darkroom to copy an existing radiograph using light."
  },
  {
    "question": "A clinic stores unexposed films in a warm, humid environment. Which artifact is MOST likely to occur?",
    "answers": [
      {"text": "Increased sharpness", "correct": false},
      {"text": "Film fog", "correct": true},
      {"text": "Improved contrast", "correct": false},
      {"text": "Reduced density", "correct": false},
      {"text": "Enhanced resolution", "correct": false}
    ],
    "explanation": "Heat and humidity adversely affect films, leading to film fog, which reduces diagnostic quality."
  },
  {
    "question": "What is the optimal temperature range for storing dental x-ray films?",
    "answers": [
      {"text": "0°–20° F", "correct": false},
      {"text": "30°–40° F", "correct": false},
      {"text": "50°–70° F", "correct": true},
      {"text": "70°–90° F", "correct": false},
      {"text": "90°–110° F", "correct": false}
    ],
    "explanation": "Films should be stored at 50°–70°F to prevent degradation and maintain image quality."
  },
  {
    "question": "What is the recommended relative humidity range for proper film storage?",
    "answers": [
      {"text": "10%–20%", "correct": false},
      {"text": "20%–30%", "correct": false},
      {"text": "30%–50%", "correct": true},
      {"text": "50%–70%", "correct": false},
      {"text": "70%–90%", "correct": false}
    ],
    "explanation": "Proper storage requires 30%–50% relative humidity to prevent film damage and fogging."
  },
  {
    "question": "A dental office stores film near an operatory where x-rays are frequently taken. What is the MOST likely consequence?",
    "answers": [
      {"text": "Improved film sensitivity", "correct": false},
      {"text": "Film fog due to radiation exposure", "correct": true},
      {"text": "Reduced exposure time", "correct": false},
      {"text": "Enhanced image contrast", "correct": false},
      {"text": "No effect on film quality", "correct": false}
    ],
    "explanation": "Exposure to stray radiation can prematurely expose films, resulting in fog and degraded image quality."
  },
  {
    "question": "Which device is BEST suited for protecting stored films from radiation exposure?",
    "answers": [
      {"text": "Plastic container", "correct": false},
      {"text": "Glass cabinet", "correct": false},
      {"text": "Lead-lined storage box", "correct": true},
      {"text": "Paper envelope", "correct": false},
      {"text": "Wooden drawer", "correct": false}
    ],
    "explanation": "Lead-lined or radiation-resistant containers protect films from stray radiation, preventing fogging."
  },
  {
    "question": "Which statement BEST describes extraoral film usage?",
    "answers": [
      {"text": "Placed inside the mouth for exposure", "correct": false},
      {"text": "Exposed without screens", "correct": false},
      {"text": "Typically used with intensifying screens and cassette", "correct": true},
      {"text": "Used only for duplicating images", "correct": false},
      {"text": "Does not require processing", "correct": false}
    ],
    "explanation": "Extraoral films are usually screen films, requiring intensifying screens and a cassette for efficient exposure."
  },
  {
    "question": "A dental assistant uses expired film for radiography. What is the MOST likely outcome?",
    "answers": [
      {"text": "Improved image density", "correct": false},
      {"text": "No effect on image quality", "correct": false},
      {"text": "Decreased image quality and possible fog", "correct": true},
      {"text": "Reduced exposure time", "correct": false},
      {"text": "Enhanced contrast", "correct": false}
    ],
    "explanation": "Expired films may show reduced sensitivity and increased fog, compromising diagnostic quality. Films should always be used before expiration."
  }, 

  {
    "question": "Dental x-ray film that is placed inside the mouth and used to examine the teeth and supporting structures is termed:",
    "answers": [
      {"text": "duplicating", "correct": false},
      {"text": "extraoral", "correct": false},
      {"text": "intraoral", "correct": true},
      {"text": "none of the above", "correct": false}
    ],
    "explanation": "Intraoral film is placed inside the mouth and used to examine teeth and supporting structures."
  },
  {
    "question": "The identification dot on the intraoral film is significant because it:",
    "answers": [
      {"text": "indicates the patient’s right or left side", "correct": false},
      {"text": "determines film orientation", "correct": false},
      {"text": "is important in film mounting", "correct": false},
      {"text": "all of the above", "correct": true}
    ],
    "explanation": "The identification dot helps indicate patient side, determines film orientation, and is important in mounting films correctly."
  },
  {
    "question": "One advantage of a film with an emulsion coating on both sides (double-emulsion film) is that:",
    "answers": [
      {"text": "the film requires less radiation exposure to make an image", "correct": true},
      {"text": "the image produced is less distorted", "correct": false},
      {"text": "the film has less sensitivity to radiation", "correct": false},
      {"text": "processing solutions are absorbed more easily", "correct": false}
    ],
    "explanation": "Double-emulsion films require less radiation exposure because both sides are sensitive to x-rays."
  },
  {
    "question": "The purpose of a lead foil sheet in the film packet is to:",
    "answers": [
      {"text": "protect the film from primary radiation", "correct": false},
      {"text": "protect the film from saliva", "correct": false},
      {"text": "protect the film from backscattered radiation", "correct": true},
      {"text": "distinguish between the patient’s right and left sides", "correct": false}
    ],
    "explanation": "The lead foil sheet absorbs backscattered radiation to prevent film fogging."
  },
  {
    "question": "Which is not found on the label side of the film packet?",
    "answers": [
      {"text": "film speed", "correct": false},
      {"text": "expiration date", "correct": false},
      {"text": "the phrase “opposite side toward tube”", "correct": false},
      {"text": "number of films enclosed", "correct": true}
    ],
    "explanation": "The number of films enclosed is typically not printed on the label side."
  },
  {
    "question": "Which film size is known as the standard film?",
    "answers": [
      {"text": "0", "correct": false},
      {"text": "1", "correct": false},
      {"text": "2", "correct": true},
      {"text": "3", "correct": false}
    ],
    "explanation": "Size 2 film is the standard intraoral film size used for most adult periapical and bite-wing images."
  },
  {
    "question": "Which is the largest intraoral film size?",
    "answers": [
      {"text": "4", "correct": true},
      {"text": "3", "correct": false},
      {"text": "2", "correct": false},
      {"text": "1", "correct": false}
    ],
    "explanation": "Size 4 is the largest intraoral film, typically used for occlusal images."
  },
  {
    "question": "The film characteristic that is “the amount of radiation needed to produce a radiograph of standard density” is:",
    "answers": [
      {"text": "contrast", "correct": false},
      {"text": "speed", "correct": true},
      {"text": "image resolution", "correct": false},
      {"text": "size", "correct": false}
    ],
    "explanation": "Film speed refers to the amount of radiation required to produce a radiograph of standard density."
  },
  {
    "question": "The speed of a film is determined by the size of the silver halide crystals in the emulsion. Identify the true statement:",
    "answers": [
      {"text": "The larger the crystals, the faster the film speed.", "correct": true},
      {"text": "The larger the crystals, the slower the film speed.", "correct": false},
      {"text": "The smaller the crystals, the faster the film speed.", "correct": false},
      {"text": "None of the above are correct.", "correct": false}
    ],
    "explanation": "Larger silver halide crystals increase film speed by requiring less radiation for exposure."
  },
  {
    "question": "A film that is placed outside the mouth during x-ray exposure is termed:",
    "answers": [
      {"text": "extraoral", "correct": true},
      {"text": "intraoral", "correct": false},
      {"text": "duplicating", "correct": false},
      {"text": "periapical", "correct": false}
    ],
    "explanation": "Extraoral films are placed outside the mouth for imaging larger areas such as panoramic or cephalometric radiographs."
  },
  {
    "question": "A screen film is more sensitive to fluorescent light than to direct exposure to X-ray.",
    "answers": [
      {"text": "True", "correct": true},
      {"text": "False", "correct": false}
    ],
    "explanation": "Screen films are designed to be exposed primarily by the visible light emitted from intensifying screens."
  },
  {
    "question": "Nonscreen extraoral film is commonly used in extraoral radiography.",
    "answers": [
      {"text": "True", "correct": false},
      {"text": "False", "correct": true}
    ],
    "explanation": "Nonscreen films require higher radiation doses and are rarely used in dental extraoral radiography."
  },
  {
    "question": "The device that transfers x-ray energy into visible light is termed a(n):",
    "answers": [
      {"text": "cassette", "correct": false},
      {"text": "nonscreen film", "correct": false},
      {"text": "screen film", "correct": false},
      {"text": "intensifying screen", "correct": true}
    ],
    "explanation": "Intensifying screens convert x-ray energy into visible light to expose screen film."
  },
  {
    "question": "The intensifying screen that emits green light and must be used with green-sensitive film is termed:",
    "answers": [
      {"text": "calcium tungstate", "correct": false},
      {"text": "rare earth", "correct": true},
      {"text": "phosphor", "correct": false},
      {"text": "rare tungstate", "correct": false}
    ],
    "explanation": "Rare earth screens emit green light and require green-sensitive films for optimal exposure."
  },
  {
    "question": "The device used to hold the extraoral film and intensifying screens is termed a:",
    "answers": [
      {"text": "screen holder", "correct": false},
      {"text": "film holder", "correct": false},
      {"text": "cassette", "correct": true},
      {"text": "any of the above", "correct": false}
    ],
    "explanation": "A cassette holds the extraoral film and intensifying screens securely during exposure."
  },
  {
    "question": "Which statement is true?",
    "answers": [
      {"text": "Cassettes are available in sizes that correspond to film and screen sizes", "correct": true},
      {"text": "A flexible cassette is more expensive than is a rigid cassette.", "correct": false},
      {"text": "Film can be loaded incorrectly in the rigid cassette.", "correct": true},
      {"text": "Film cannot be loaded incorrectly in the flexible cassette.", "correct": false}
    ],
    "explanation": "Cassettes come in various sizes matching films; rigid cassettes can be loaded incorrectly, while flexible cassettes are less prone to this."
  },
  {
    "question": "Which results if the intensifying screen is not in perfect contact with the screen film?",
    "answers": [
      {"text": "The screen may be damaged.", "correct": false},
      {"text": "The film may be damaged.", "correct": false},
      {"text": "A loss of image sharpness occurs.", "correct": true},
      {"text": "None of the above.", "correct": false}
    ],
    "explanation": "Poor contact between screen and film causes image blurring and loss of sharpness."
  },
  {
    "question": "Which statement about the duplicating film is false?",
    "answers": [
      {"text": "It is not exposed to x-rays.", "correct": false},
      {"text": "It is used in the darkroom.", "correct": false},
      {"text": "It may be placed intraorally or extraorally.", "correct": true},
      {"text": "It is used to make copies of radiographs.", "correct": false}
    ],
    "explanation": "Duplicating film is not placed intraorally or extraorally; it is used only to copy existing radiographs."
  },
  {
    "question": "Identify the ideal temperature and humidity levels for film storage:",
    "answers": [
      {"text": "50° F to 70° F; 30% to 50%", "correct": true},
      {"text": "60° F to 80° F; 50% to 60%", "correct": false},
      {"text": "70° F to 90° F; 60% to 70%", "correct": false},
      {"text": "below 50° F; 0% to 30%", "correct": false}
    ],
    "explanation": "Films should be stored at 50°–70°F with 30%–50% relative humidity to maintain quality and prevent fogging."
  }

]

let questions=[];
let currentQuestionIndex=0;
let score=0;
let answersRecord=[];
let timeLeft=EXAM_TIME;
let timer;

var questionElement=document.getElementById("question");
var answerButtons=document.getElementById("answer-buttons");
var nextButton=document.getElementById("next-btn");
var explanationElement=document.getElementById("explanation");
var progressBar=document.getElementById("progress-bar");
var navigatorDiv=document.getElementById("navigator");
var scoreDisplay=document.getElementById("scoreDisplay");
var reviewSection=document.getElementById("review-section");
var restartBtn=document.getElementById("restart-btn");
var submitBtn=document.getElementById("submit-btn");
var timerElement=document.getElementById("timer");

Array.prototype.shuffle=function(){
return this.sort(function(){ return Math.random()-0.5; });
}

function startExam(){

questions=[...allQuestions].shuffle().slice(0,QUESTION_LIMIT);
answersRecord=new Array(questions.length).fill(null);

currentQuestionIndex=0;
score=0;

generateNavigator();
showQuestion();
startTimer();
}

function startTimer(){

timer=setInterval(function(){

timeLeft--;

let min=Math.floor(timeLeft/60);
let sec=timeLeft%60;

timerElement.innerText=
String(min).padStart(2,'0')+": "+
String(sec).padStart(2,'0');

if(timeLeft<=0){

clearInterval(timer);
finishExam();

}

},1000);
}

function generateNavigator(){

navigatorDiv.innerHTML="";

for(let i=0;i<questions.length;i++){

let btn=document.createElement("button");
btn.innerText=i+1;
btn.classList.add("nav-btn");

btn.onclick=function(){

currentQuestionIndex=i;
showQuestion();

}

navigatorDiv.appendChild(btn);

}

}

function showQuestion(){

resetState();

let q=questions[currentQuestionIndex];

questionElement.innerText=
(currentQuestionIndex+1)+". "+q.question;

updateProgress();

let answers=[...q.answers].shuffle();

answers.forEach(function(answer){

const button=document.createElement("button");
button.innerText=answer.text;

if(answer.correct){
button.dataset.correct=true;
}

button.onclick=selectAnswer;

answerButtons.appendChild(button);

});

}

function resetState(){

explanationElement.innerText="";
nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selected=e.target;
const correct=selected.dataset.correct==="true";

answersRecord[currentQuestionIndex]=selected.innerText;

if(correct){

selected.classList.add("correct");
score++;

}else{

selected.classList.add("wrong");

explanationElement.innerText=
"Explanation: "+questions[currentQuestionIndex].explanation;

}

Array.from(answerButtons.children).forEach(function(btn){

if(btn.dataset.correct==="true"){
btn.classList.add("correct");
}

btn.disabled=true;

});

document.querySelectorAll(".nav-btn")[currentQuestionIndex]
.classList.add("answered");

scoreDisplay.innerText=score;

nextButton.style.display="block";

}

nextButton.onclick=function(){

currentQuestionIndex++;

if(currentQuestionIndex<questions.length){

showQuestion();

}else{

finishExam();

}

}

submitBtn.onclick=finishExam;

function finishExam(){

clearInterval(timer);

questionElement.innerText="Exam Completed";

answerButtons.innerHTML="";

reviewSection.innerHTML=
"<h3>Review</h3>";

questions.forEach(function(q,i){

let div=document.createElement("div");

let correctAnswer=q.answers.find(function(a){ return a.correct; }).text;

div.innerHTML=
"<b>Q"+(i+1)+":</b> "+q.question+
"<br>Your answer: "+answersRecord[i]+
"<br>Correct answer: "+correctAnswer+
"<br><br>";

reviewSection.appendChild(div);

});

restartBtn.style.display="block";
}

restartBtn.onclick=function(){

location.reload();

}

function updateProgress(){

let progress=
(currentQuestionIndex/questions.length)*100;

progressBar.style.width=progress+"%";

}

startExam();