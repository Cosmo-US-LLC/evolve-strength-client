import React, { useState, useEffect } from "react";

const CARD_DATA = [
  {
    key: "LOCATIONS",
    title: "LOCATIONS",
    description:
      "Evolve locations offer a variety of unique services. Find out what your location has to offer.",
    image: "https://via.placeholder.com/350x220?text=Locations",
  },
  {
    key: "WELLNESS",
    title: "WELLNESS",
    description:
      "Explore a range of wellness service providers tailored to your needs.",
    image: "https://via.placeholder.com/350x220?text=Wellness",
  },
  {
    key: "TRAINERS",
    title: "TRAINERS",
    description:
      "Explore certified personal trainers dedicated to helping you reach your fitness goals.",
    image: "https://via.placeholder.com/350x220?text=Trainers",
  },
];

const LOCATIONS = [
  {
    city: "EDMONTON",
    branch: "SOUTH",
    details: "Details for EDMONTON SOUTH",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Chiropractic Care", icon: "\u001f9D9" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Pilates", icon: "\u001f938" },
      { name: "Acupuncture", icon: "\u001f489" },
      { name: "Dietitian Services", icon: "\u001f9D1" },
      { name: "Esthetician", icon: "\u001f9D1" },
      { name: "Laser Therapy", icon: "\u001f52A" },
      { name: "Osteopathy", icon: "\u001f9B4" },
      { name: "Mental Health Support", icon: "\u001f9D1" },
    ],
    trainers: [
      {
        name: "Jordan Browne",
        title: "Olympic Weightlifting and Strength Coach",
        image: "https://via.placeholder.com/200x200?text=Jordan",
        services: ["All", "Chiropractic Care", "Massage Therapy"],
        about:
          "Graduate of NAIT and the CSCP-CPT program in 2021. Our team has coached everyone from grassroots beginners to multiple national-level weightlifters, including a National Champion. We get our athletes in, establish a space for growth as both a person and as an athlete.",
        certification:
          "NCCP Trained Olympic Weightlifting Coach, CSCP-CPT Certified Personal Trainer, NAIT Personal Fitness Trainer Graduate",
        areasOfFocus: [
          "Olympic Weightlifting",
          "Strength Training",
          "Strength and Conditioning for Sport",
        ],
        joined: "2023-01-01",
        location: "EDMONTON SOUTH",
      },
      {
        name: "Sharina Palaypay",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Sharina",
        services: ["All", "Pilates", "Massage Therapy"],
        about:
          "Sharina is a passionate personal trainer with a focus on pilates and holistic wellness.",
        certification: "Certified Pilates Instructor, Personal Trainer",
        areasOfFocus: ["Pilates", "Wellness"],
        joined: "2023-01-01",
        location: "EDMONTON SOUTH",
      },
    ],
  },
  {
    city: "CALGARY",
    branch: "ROYAL OAK",
    details: "Details for CALGARY ROYAL OAK",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Acupuncture", icon: "\u001f489" },
      { name: "Dietitian Services", icon: "\u001f9D1" },
      { name: "Esthetician", icon: "\u001f9D1" },
    ],
    trainers: [
      {
        name: "Denisse Peters",
        title: "Registered Massage Therapist",
        image: "https://via.placeholder.com/200x200?text=Denisse",
        services: ["All", "Massage Therapy", "Acupuncture"],
        location: "CALGARY ROYAL OAK",
      },
      {
        name: "Steven Fitzpatrick",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Steven",
        services: ["All", "Dietitian Services"],
        location: "CALGARY ROYAL OAK",
      },
    ],
  },
  {
    city: "EDMONTON",
    branch: "NORTH",
    details: "Details for EDMONTON NORTH",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Chiropractic Care", icon: "\u001f9D9" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Mental Health Support", icon: "\u001f9D1" },
    ],
    trainers: [
      {
        name: "Maryam Neamah",
        title: "Medical Esthetician",
        image: "https://via.placeholder.com/200x200?text=Maryam",
        services: ["All", "Massage Therapy", "Mental Health Support"],
        location: "EDMONTON NORTH",
      },
      {
        name: "Robert Tenhove",
        title: "Chiropractor",
        image: "https://via.placeholder.com/200x200?text=Robert",
        services: ["All", "Chiropractic Care"],
        location: "EDMONTON NORTH",
      },
    ],
  },
  {
    city: "EDMONTON",
    branch: "DOWNTOWN",
    details: "Details for EDMONTON DOWNTOWN",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Pilates", icon: "\u001f938" },
      { name: "Laser Therapy", icon: "\u001f52A" },
    ],
    trainers: [
      {
        name: "Leah Cheung",
        title: "Dietitian",
        image: "https://via.placeholder.com/200x200?text=Leah",
        services: ["All", "Massage Therapy"],
        location: "EDMONTON DOWNTOWN",
      },
      {
        name: "Paige Thomson",
        title: "Manual Osteopathic Practitioner",
        image: "https://via.placeholder.com/200x200?text=Paige",
        services: ["All", "Pilates", "Laser Therapy"],
        location: "EDMONTON DOWNTOWN",
      },
    ],
  },
  {
    city: "CALGARY",
    branch: "SUNRIDGE",
    details: "Details for CALGARY SUNRIDGE",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Esthetician", icon: "\u001f9D1" },
      { name: "Osteopathy", icon: "\u001f9B4" },
    ],
    trainers: [
      {
        name: "Michelle Moen",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Michelle",
        services: ["All", "Massage Therapy", "Osteopathy"],
        location: "CALGARY SUNRIDGE",
      },
      {
        name: "Christopher Merrell",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Christopher",
        services: ["All", "Esthetician"],
        location: "CALGARY SUNRIDGE",
      },
    ],
  },
  {
    city: "BURNABY",
    branch: "SOUTH",
    details: "Details for BURNABY SOUTH",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Massage Therapy", icon: "\u001f486" },
      { name: "Acupuncture", icon: "\u001f489" },
      { name: "Osteopathy", icon: "\u001f9B4" },
    ],
    trainers: [
      {
        name: "Naomi Sachs",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Naomi",
        services: ["All", "Massage Therapy", "Osteopathy"],
        location: "BURNABY SOUTH",
      },
      {
        name: "Kieryn Marcellus",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Kieryn",
        services: ["All", "Acupuncture"],
        location: "BURNABY SOUTH",
      },
    ],
  },
  {
    city: "VANCOUVER",
    branch: "THE POST",
    details: "Details for VANCOUVER THE POST",
    services: [
      { name: "All", icon: "\u001f5C3" },
      { name: "Dietitian Services", icon: "\u001f9D1" },
      { name: "Esthetician", icon: "\u001f9D1" },
      { name: "Mental Health Support", icon: "\u001f9D1" },
    ],
    trainers: [
      {
        name: "Steven Fitzpatrick",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Steven",
        services: ["All", "Dietitian Services"],
        location: "VANCOUVER THE POST",
      },
      {
        name: "Denisse Peters",
        title: "Registered Massage Therapist",
        image: "https://via.placeholder.com/200x200?text=Denisse",
        services: ["All", "Esthetician", "Mental Health Support"],
        location: "VANCOUVER THE POST",
      },
    ],
  },
];

const WELLNESS_SERVICES = [
  {
    name: "MASSAGE THERAPY",
    trainers: [
      {
        name: "Denisse Peters",
        title: "Registered Massage Therapist",
        image: "https://via.placeholder.com/200x200?text=Denisse",
        about:
          "Denisse is a skilled massage therapist with years of experience in wellness.",
        certification: "Registered Massage Therapist",
        areasOfFocus: ["Massage Therapy", "Wellness"],
        location: "CALGARY ROYAL OAK",
      },
      {
        name: "Steven Fitzpatrick",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Steven",
        about: "Steven specializes in holistic wellness and massage therapy.",
        certification: "Certified Personal Trainer",
        areasOfFocus: ["Massage Therapy", "Holistic Wellness"],
      },
    ],
  },
  {
    name: "PILATES",
    trainers: [
      {
        name: "Sharina Palaypay",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Sharina",
        about: "Sharina is a passionate pilates instructor.",
        certification: "Certified Pilates Instructor",
        areasOfFocus: ["Pilates", "Wellness"],
      },
      {
        name: "Paige Thomson",
        title: "Manual Osteopathic Practitioner",
        image: "https://via.placeholder.com/200x200?text=Paige",
        about:
          "Paige brings pilates and osteopathy together for holistic health.",
        certification: "Manual Osteopathic Practitioner",
        areasOfFocus: ["Pilates", "Osteopathy"],
      },
    ],
  },
  {
    name: "ACUPUNCTURE",
    trainers: [
      {
        name: "Kieryn Marcellus",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Kieryn",
        about: "Kieryn is an expert in acupuncture and holistic therapies.",
        certification: "Certified Acupuncturist",
        areasOfFocus: ["Acupuncture", "Wellness"],
      },
      {
        name: "Naomi Sachs",
        title: "Personal Trainer",
        image: "https://via.placeholder.com/200x200?text=Naomi",
        about: "Naomi provides acupuncture and wellness coaching.",
        certification: "Certified Acupuncturist",
        areasOfFocus: ["Acupuncture", "Wellness"],
      },
    ],
  },
];

function TrainerCard({ trainer, selected, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: selected ? "#4CAF50" : "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minWidth: 180,
        minHeight: 240,
        margin: 4,
        cursor: "pointer",
        border: selected ? "2px solid #388e3c" : "none",
        color: selected ? "#fff" : "#222",
        position: "relative",
        transition: "background 0.2s, color 0.2s",
      }}
    >
      <img
        src={trainer.image}
        alt={trainer.name}
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: 12,
          border: selected ? "2px solid #fff" : "none",
        }}
      />
      <div style={{ fontWeight: 700, fontSize: 18 }}>{trainer.name}</div>
      <div
        style={{
          fontSize: 15,
          color: selected ? "#e0f2f1" : "#444",
          marginTop: 4,
        }}
      >
        {trainer.title}
      </div>
      {selected && (
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "#fff",
            color: "#4CAF50",
            borderRadius: "50%",
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          ✓
        </span>
      )}
    </div>
  );
}

function TrainerDetails({ trainer }) {
  if (!trainer) return null;
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: 24,
        marginTop: 32,
        marginBottom: 16,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
        About:
      </div>
      <div style={{ color: "#333", marginBottom: 16 }}>{trainer.about}</div>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
        Certification:
      </div>
      <div style={{ color: "#333", marginBottom: 16 }}>
        {trainer.certification}
      </div>
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
        Areas of Focus:
      </div>
      <div
        style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}
      >
        {trainer.areasOfFocus &&
          trainer.areasOfFocus.map((area, idx) => (
            <span
              key={idx}
              style={{
                background: "#e8f5e9",
                color: "#388e3c",
                borderRadius: 8,
                padding: "6px 16px",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              {area}
            </span>
          ))}
      </div>
      <button
        style={{
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "12px 32px",
          fontWeight: 700,
          fontSize: 16,
          cursor: "pointer",
          marginTop: 8,
        }}
      >
        BOOK NOW
      </button>
    </div>
  );
}

function CollapsibleLocations() {
  const [expanded, setExpanded] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [serviceTabs, setServiceTabs] = useState({}); // { [locKey]: selectedServiceName }
  const [selectedTrainer, setSelectedTrainer] = useState({}); // { [locKey_service]: trainerIdx }

  const handleToggle = (loc) => {
    setExpanded(expanded === loc ? null : loc);
    setSelectedLocation(loc);
  };

  const handleServiceSelect = (locKey, serviceName) => {
    setServiceTabs((prev) => ({ ...prev, [locKey]: serviceName }));
    setSelectedTrainer((prev) => ({
      ...prev,
      [`${locKey}_${serviceName}`]: null,
    })); // reset trainer selection on tab change
  };

  return (
    <div className="h-full">
      {LOCATIONS.map((loc) => {
        const locKey = `${loc.city} ${loc.branch}`;
        const isOpen = expanded === locKey;
        const isSelected = selectedLocation === locKey;
        const selectedService = serviceTabs[locKey] || "All";
        // Filter trainers by selected service
        const filteredTrainers =
          selectedService === "All"
            ? loc.trainers
            : loc.trainers.filter(
                (trainer) =>
                  trainer.services && trainer.services.includes(selectedService)
              );
        const trainerKey = `${locKey}_${selectedService}`;
        const selectedIdx = selectedTrainer[trainerKey];
        return (
          <div key={locKey}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "12px 0",
                cursor: "pointer",
                background: isSelected ? "#e8f5e9" : "transparent",
              }}
              onClick={() => handleToggle(locKey)}
            >
              <div>
                <span style={{ fontWeight: 700 }}>{loc.city}</span>{" "}
                <span style={{ fontWeight: 400 }}>{loc.branch}</span>
                <span
                  style={{
                    marginLeft: 12,
                    fontSize: 18,
                    verticalAlign: "middle",
                    display: "inline-block",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  &#x25B2;
                </span>
              </div>
              <a
                href="#"
                style={{
                  color: "#4CAF50",
                  fontWeight: 600,
                  fontSize: 16,
                  textDecoration: "none",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                JOIN NOW
              </a>
            </div>
            {isOpen && (
              <div style={{ padding: "16px 0 10px 0" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {loc.services &&
                    loc.services.map((service) => (
                      <button
                        key={service.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceSelect(locKey, service.name);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "12px 24px",
                          borderRadius: 8,
                          border:
                            selectedService === service.name
                              ? "none"
                              : "1px solid #4CAF50",
                          background:
                            selectedService === service.name ? "#000" : "#fff",
                          color:
                            selectedService === service.name
                              ? "#fff"
                              : "#388e3c",
                          fontWeight: 500,
                          fontSize: 16,
                          cursor: "pointer",
                          minWidth: 120,
                          boxShadow:
                            selectedService === service.name
                              ? "0 2px 8px rgba(0,0,0,0.08)"
                              : "none",
                          outline: "none",
                          transition: "background 0.2s, color 0.2s",
                          borderColor:
                            selectedService === service.name
                              ? "#000"
                              : "#4CAF50",
                        }}
                      >
                        <span style={{ fontSize: 20 }}>{service.icon}</span>
                        {service.name}
                      </button>
                    ))}
                </div>
                {/* Show filtered trainer cards for the selected tab */}
                {filteredTrainers && filteredTrainers.length > 0 && (
                  <>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 24,
                        marginTop: 32,
                      }}
                    >
                      {filteredTrainers.map((trainer, idx) => (
                        <TrainerCard
                          key={idx}
                          trainer={trainer}
                          selected={selectedIdx === idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTrainer((prev) => ({
                              ...prev,
                              [trainerKey]: idx,
                            }));
                          }}
                        />
                      ))}
                    </div>
                    <TrainerDetails trainer={filteredTrainers[selectedIdx]} />
                  </>
                )}
                {filteredTrainers && filteredTrainers.length === 0 && (
                  <div
                    style={{
                      marginTop: 32,
                      color: "#888",
                      textAlign: "center",
                    }}
                  >
                    No trainers available for this service.
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CollapsibleServices() {
  const [expanded, setExpanded] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState({}); // { [serviceName]: trainerIdx }
  const [serviceLocation, setServiceLocation] = useState({}); // { [serviceName]: location }
  const [showDropdown, setShowDropdown] = useState({}); // { [serviceName]: boolean }

  // Use the same tabStyle as TrainersFlow for dropdown button
  const tabStyle = (active) => ({
    background: active ? "#000" : "#fff",
    color: active ? "#fff" : "#222",
    border: "1px solid #eee",
    borderRadius: 10,
    padding: "12px 28px",
    fontWeight: 500,
    fontSize: 16,
    cursor: "pointer",
    marginRight: 12,
    outline: "none",
    boxShadow: active ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
    position: "relative",
  });

  return (
    <div className="h-full">
      {WELLNESS_SERVICES.map((service) => {
        const isOpen = expanded === service.name;
        const selectedIdx = selectedTrainer[service.name];
        // Gather unique locations for this service's trainers
        const locations = Array.from(
          new Set(
            (service.trainers || []).map((t) => t.location).filter(Boolean)
          )
        );
        const selectedLoc = serviceLocation[service.name] || "All Locations";
        // Filter trainers by selected location
        const filteredTrainers =
          selectedLoc === "All Locations"
            ? service.trainers
            : (service.trainers || []).filter(
                (t) => t.location === selectedLoc
              );
        return (
          <div key={service.name}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "1px solid #ddd",
                padding: "12px 0",
                cursor: "pointer",
                background: isOpen ? "#e8f5e9" : "transparent",
              }}
              onClick={() => setExpanded(isOpen ? null : service.name)}
            >
              <div style={{ fontWeight: 600 }}>{service.name}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <a
                  href="#"
                  style={{
                    color: "#4CAF50",
                    fontWeight: 600,
                    fontSize: 16,
                    textDecoration: "none",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  JOIN NOW
                </a>
                <span
                  style={{
                    marginLeft: 12,
                    fontSize: 18,
                    verticalAlign: "middle",
                    display: "inline-block",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  &#x25B2;
                </span>
              </div>
            </div>
            {isOpen && (
              <div style={{ padding: "16px 0 10px 0" }}>
                {/* Locations dropdown styled like TrainersFlow */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <button
                      style={tabStyle(false)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown((prev) => ({
                          ...prev,
                          [service.name]: !prev[service.name],
                        }));
                      }}
                    >
                      {selectedLoc}{" "}
                      <span style={{ float: "right" }}>&#x25BC;</span>
                    </button>
                    {showDropdown[service.name] && (
                      <div
                        style={{
                          position: "absolute",
                          top: 48,
                          left: 0,
                          background: "#fff",
                          border: "1px solid #eee",
                          borderRadius: 8,
                          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                          zIndex: 10,
                          minWidth: 180,
                        }}
                      >
                        <div
                          style={{
                            padding: "10px 18px",
                            cursor: "pointer",
                            background:
                              selectedLoc === "All Locations"
                                ? "#e8f5e9"
                                : "#fff",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setServiceLocation((prev) => ({
                              ...prev,
                              [service.name]: "All Locations",
                            }));
                            setShowDropdown((prev) => ({
                              ...prev,
                              [service.name]: false,
                            }));
                          }}
                        >
                          All Locations
                        </div>
                        {locations.map((loc, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: "10px 18px",
                              cursor: "pointer",
                              background:
                                selectedLoc === loc ? "#e8f5e9" : "#fff",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setServiceLocation((prev) => ({
                                ...prev,
                                [service.name]: loc,
                              }));
                              setShowDropdown((prev) => ({
                                ...prev,
                                [service.name]: false,
                              }));
                            }}
                          >
                            {loc}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 24,
                    marginTop: 8,
                  }}
                >
                  {filteredTrainers.map((trainer, idx) => (
                    <TrainerCard
                      key={idx}
                      trainer={trainer}
                      selected={selectedIdx === idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTrainer((prev) => ({
                          ...prev,
                          [service.name]: idx,
                        }));
                      }}
                    />
                  ))}
                </div>
                <TrainerDetails trainer={filteredTrainers[selectedIdx]} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function TrainersFlow({ allTrainers, allLocations }) {
  const [selectedTab, setSelectedTab] = useState("All");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTrainerIdx, setSelectedTrainerIdx] = useState(null);

  useEffect(() => {
    setSelectedTrainerIdx(null); // Reset selected trainer when filter changes
  }, [selectedTab, selectedLocation]);

  let filteredTrainers = allTrainers;
  if (selectedTab === "Alphabetical") {
    filteredTrainers = [...allTrainers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (selectedTab === "Locations" && selectedLocation) {
    filteredTrainers = allTrainers.filter(
      (trainer) => trainer.location === selectedLocation
    );
  } else if (selectedTab === "New Trainers") {
    filteredTrainers = allTrainers.filter(
      (trainer) => trainer.joined === getToday()
    );
  }

  const tabStyle = (active) => ({
    background: active ? "#000" : "#fff",
    color: active ? "#fff" : "#222",
    border: "1px solid #eee",
    borderRadius: 10,
    padding: "12px 28px",
    fontWeight: 500,
    fontSize: 16,
    cursor: "pointer",
    marginRight: 12,
    outline: "none",
    boxShadow: active ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
    position: "relative",
  });

  // 4 columns per row
  const columns = 4;
  const rows = [];
  for (let i = 0; i < filteredTrainers.length; i += columns) {
    rows.push(filteredTrainers.slice(i, i + columns));
  }

  let detailsPanel = null;
  let detailsInserted = false;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
        <button
          style={tabStyle(selectedTab === "All")}
          onClick={() => {
            setSelectedTab("All");
            setSelectedLocation("");
          }}
        >
          All
        </button>
        <button
          style={tabStyle(selectedTab === "Alphabetical")}
          onClick={() => {
            setSelectedTab("Alphabetical");
            setSelectedLocation("");
          }}
        >
          Alphabetical (A-Z)
        </button>
        <div style={{ position: "relative" }}>
          <button
            style={tabStyle(selectedTab === "Locations")}
            onClick={() => {
              setSelectedTab("Locations");
              setShowLocationDropdown((v) => !v);
            }}
          >
            Locations <span style={{ marginLeft: 8 }}>&#x25BC;</span>
          </button>
          {selectedTab === "Locations" && showLocationDropdown && (
            <div
              style={{
                position: "absolute",
                top: 48,
                left: 0,
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                zIndex: 10,
                minWidth: 180,
              }}
            >
              {allLocations.map((loc, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "10px 18px",
                    cursor: "pointer",
                    background: selectedLocation === loc ? "#e8f5e9" : "#fff",
                    color: "#222",
                  }}
                  onClick={() => {
                    setSelectedLocation(loc);
                    setShowLocationDropdown(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          style={tabStyle(selectedTab === "New Trainers")}
          onClick={() => {
            setSelectedTab("New Trainers");
            setSelectedLocation("");
          }}
        >
          New Trainers
        </button>
      </div>
      {/* Trainers grid with details panel inserted after the selected row */}
      <div style={{ width: "100%" }}>
        {rows.map((row, rowIdx) => {
          const startIdx = rowIdx * columns;
          const endIdx = startIdx + row.length - 1;
          const isSelectedInRow =
            selectedTrainerIdx !== null &&
            selectedTrainerIdx >= startIdx &&
            selectedTrainerIdx <= endIdx;
          return (
            <React.Fragment key={rowIdx}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${columns}, minmax(200px, 1fr))`,
                  gap: 24,
                  marginTop: rowIdx === 0 ? 8 : 32,
                }}
              >
                {row.map((trainer, idx) => {
                  const globalIdx = startIdx + idx;
                  return (
                    <TrainerCard
                      key={globalIdx}
                      trainer={trainer}
                      selected={selectedTrainerIdx === globalIdx}
                      onClick={() => setSelectedTrainerIdx(globalIdx)}
                    />
                  );
                })}
              </div>
              {/* Insert details panel after the row containing the selected trainer */}
              {isSelectedInRow &&
                selectedTrainerIdx !== null &&
                !detailsInserted && (
                  <div style={{ width: "100%" }}>
                    <TrainerDetails
                      trainer={filteredTrainers[selectedTrainerIdx]}
                    />
                  </div>
                )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function DiscoverEvolve({ selected, onSelect }) {
  // Gather all trainers and locations for TrainersFlow
  const allTrainers = LOCATIONS.flatMap((loc) => loc.trainers || []);
  const allLocations = Array.from(
    new Set(LOCATIONS.map((loc) => `${loc.city} ${loc.branch}`))
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 32,
          marginBottom: 40,
        }}
      >
        {CARD_DATA.map((card) => (
          <div
            key={card.key}
            onClick={() => onSelect && onSelect(card.key)}
            style={{
              position: "relative",
              width: 350,
              height: 220,
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: selected === card.key ? "0 0 0 4px #4CAF50" : "none",
              background: `url(${card.image}) center/cover no-repeat`,
              filter: selected === card.key ? "none" : "brightness(0.7)",
              transition: "box-shadow 0.2s, filter 0.2s",
              outline: selected === card.key ? "2px solid #4CAF50" : "none",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  selected === card.key
                    ? "rgba(76,175,80,0.2)"
                    : "rgba(0,0,0,0.4)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                right: 20,
                color: "#fff",
                zIndex: 2,
                fontSize: 17,
                fontWeight: 400,
              }}
            >
              {card.description}
            </div>
            <div
              style={{
                position: "absolute",
                left: 20,
                bottom: 24,
                color: "#fff",
                zIndex: 2,
                fontWeight: 700,
                fontSize: 24,
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              {card.title}
              <span
                style={{
                  display: "inline-block",
                  marginLeft: 16,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background:
                    selected === card.key ? "#4CAF50" : "rgba(255,255,255,0.2)",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  transition: "background 0.2s",
                }}
              >
                <span style={{ color: "#fff", fontWeight: 700 }}>&#8595;</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      {selected === "LOCATIONS" && <CollapsibleLocations />}
      {selected === "WELLNESS" && <CollapsibleServices />}
      {selected === "TRAINERS" && (
        <TrainersFlow allTrainers={allTrainers} allLocations={allLocations} />
      )}
    </div>
  );
}

export default DiscoverEvolve;
