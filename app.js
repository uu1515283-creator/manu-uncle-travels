// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE DATABASE
// ==========================================

const WHATSAPP_NUMBER = "918547132282";

const DEFAULT_VEHICLES = [
    {
        id: "veh-innova-crysta",
        name: "Toyota Innova Crysta (Purple)",
        category: "suv",
        type: "Automatic",
        fuel: "Diesel",
        seats: 7,
        pricePerKm: 22,
        pricePerDay: 3500,
        allowance: 600,
        image: "assets/innova_crysta_purple.png",
        specSummary: "⚡ Automatic • ⛽ Diesel • 👤 7 Seats"
    },
    {
        id: "veh-wagonr-cng",
        name: "Maruti Suzuki Wagon R CNG (White)",
        category: "sedan",
        type: "Manual",
        fuel: "CNG",
        seats: 5,
        pricePerKm: 14,
        pricePerDay: 1500,
        allowance: 400,
        image: "assets/wagon_r_cng_white.png",
        specSummary: "⚙️ Manual • ⛽ CNG • 👤 5 Seats"
    },
    {
        id: "veh-spresso-grey",
        name: "Maruti Suzuki S-Presso Automatic (Grey)",
        category: "sedan",
        type: "Automatic",
        fuel: "Petrol",
        seats: 5,
        pricePerKm: 13,
        pricePerDay: 1300,
        allowance: 400,
        image: "assets/spresso_grey.png",
        specSummary: "⚡ Automatic • ⛽ Petrol • 👤 5 Seats"
    },
    {
        id: "veh-eeco-cng",
        name: "Maruti Suzuki Eeco CNG",
        category: "traveller",
        type: "Manual",
        fuel: "CNG",
        seats: 7,
        pricePerKm: 16,
        pricePerDay: 1800,
        allowance: 500,
        image: "assets/eeco_cng_white.png",
        specSummary: "⚙️ Manual • ⛽ CNG • 👤 7 Seats"
    },
    {
        id: "veh-ace-magic",
        name: "Tata Ace Magic CNG",
        category: "traveller",
        type: "Manual",
        fuel: "CNG",
        seats: 7,
        pricePerKm: 15,
        pricePerDay: 2000,
        allowance: 500,
        image: "assets/ace_magic_cng.png",
        specSummary: "⚙️ Manual • ⛽ CNG • 👤 7 Seats"
    },
    {
        id: "veh-tata-winger",
        name: "Tata Winger Plus Luxury (White)",
        category: "traveller",
        type: "Manual",
        fuel: "Diesel",
        seats: 12,
        pricePerKm: 28,
        pricePerDay: 4500,
        allowance: 800,
        image: "assets/winger_plus_white.png",
        specSummary: "⚙️ Manual • ⛽ Diesel • 👤 12 Seats"
    }
];

const DEFAULT_PACKAGES = [
    {
        id: "pkg-pickup",
        title: "Cochin Airport Pickup & Drop",
        duration: "Transit Service",
        image: "assets/airport_pickup.png",
        vehicleKey: "luxury-sedan",
        desc: "Luxury airport pick-up and drop-off transfers to any Cochin hub or local hotels. Flight arrivals are monitored 24/7."
    },
    {
        id: "pkg-sabarimala",
        title: "Sabarimala Pilgrimage Special",
        duration: "2 Days / 1 Night",
        image: "assets/sabarimala.png",
        vehicleKey: "suv",
        desc: "Spiritual journey to Sabarimala temple hills with experienced drivers, comfortable stops, and dedicated transit."
    },
    {
        id: "pkg-boat",
        title: "Alappuzha Luxury Houseboat Cruise",
        duration: "2 Days / 1 Night",
        image: "assets/alappuzha_boat.png",
        vehicleKey: "luxury-sedan",
        desc: "Cruise calm backwaters of Alappuzha in a premium traditional houseboat. Includes fresh meals and scenic lake vistas."
    },
    {
        id: "pkg-wayanad",
        title: "Wayanad Wilderness Adventure",
        duration: "2 Days / 1 Night",
        image: "assets/wayanad.png",
        vehicleKey: "suv",
        desc: "Experience deep bamboo woods, off-road mountain drives, ancient caves, earth reservoirs, and river rafting."
    },
    {
        id: "pkg-palakkad",
        title: "Palakkad Historical Heritage Tour",
        duration: "3 Days / 2 Nights",
        image: "assets/palakkad.png",
        vehicleKey: "luxury-sedan",
        desc: "Explore the historic Palakkad Fort, traditional heritage streets, green paddy landscape, and scenic hill summit dams."
    },
    {
        id: "pkg-munnar",
        title: "Misty Munnar Premium Escape",
        duration: "3 Days / 2 Nights",
        image: "assets/munnar.png",
        vehicleKey: "luxury-sedan",
        desc: "Explore breathtaking valleys, organic tea gardens, spice trails, and majestic waterfalls with private premium sedan transit."
    },
    {
        id: "pkg-trivandrum-pickup",
        title: "Trivandrum Airport Pickup & Drop",
        duration: "Transit Service",
        image: "assets/trivandrum_airport.png",
        vehicleKey: "luxury-sedan",
        desc: "Premium airport pick-up and drop-off transfers to and from Trivandrum International Airport. Fast checkouts, flight arrival monitoring, and professional chauffeurs."
    }
];

const DEFAULT_STORIES = [
    {
        id: "story-1",
        title: "Chasing Mist in Munnar",
        place: "Munnar tea valleys",
        author: "Admin Desk",
        content: "Our drive from Cochin to Munnar in the premium BMW sedan was absolute bliss. Smooth curves, clean air, and beautiful driver coordination. Highly recommend the tea museum visit!",
        status: "Approved",
        createdAt: "2026-05-25"
    },
    {
        id: "story-2",
        title: "Offroad thrills in Wayanad",
        place: "Wayanad forest trails",
        author: "Admin Desk",
        content: "Renting the Mahindra Thar 4x4 for self-drive in Wayanad was the highlight of our summer. Climbing Lakkidi pass in the rain was challenging but the vehicle handling was solid.",
        status: "Approved",
        createdAt: "2026-05-29"
    },
    {
        id: "story-3",
        title: "Munnar Hills & Alappuzha Houseboat Combo",
        place: "Munnar & Alappuzha",
        author: "Ranjith Kumar",
        content: "We booked a combined trip to Munnar and Alappuzha with Manu Uncle Travels. The Munnar mountain mist was enchanting, and staying in the Alappuzha luxury houseboat backwater cruise was a serene experience. The driver was very friendly and guided us to the best local food spots!",
        status: "Approved",
        createdAt: "2026-05-30"
    },
    {
        id: "story-4",
        title: "Reserve Forest Wildlife Safari Encounter",
        place: "Deep Reserve Forest Trails",
        author: "Adarsh S.",
        content: "An incredible journey through the deep reserve forest! We were lucky enough to spot a majestic tiger near the stream, wild elephants crossing the road, spotted deer grazing peacefully in the glade, and playful monkeys swinging in the trees. The driver from Manu Uncle Travels was extremely safe, patient, and knowledgeable about the forest routes.",
        status: "Approved",
        createdAt: "2026-06-01"
    },
    {
        id: "story-5",
        title: "The Thunderous Roar of Athirappilly",
        place: "Athirappilly Waterfalls",
        author: "Sneha George",
        content: "Visited the majestic Athirappilly Waterfalls, the Niagara of Kerala. The roar of the falling water and the cool mist spraying on our faces were absolutely breathtaking. Our vehicle was super comfortable, clean, and perfectly suited for our family group.",
        status: "Approved",
        createdAt: "2026-06-02"
    },
    {
        id: "story-6",
        title: "Eco-tourism Exploring Ranni & Konni Adavi",
        place: "Ranni & Konni",
        author: "Deepak & Family",
        content: "A refreshing trip to Ranni and Konni. We thoroughly enjoyed the famous bowl boat (Kuttavanchi) rafting in Konni Adavi and visited the Konni Elephant Cage to see the trained baby elephants. Traveling through the green rubber plantations and mountain pathways of Ranni was peaceful and relaxing.",
        status: "Approved",
        createdAt: "2026-06-03"
    }
];

const DEFAULT_REVIEWS = [
    {
        id: "rev-1",
        name: "Jithin Jose",
        comment: "Excellent vehicle maintenance. The Fortuner Legender was spotless and the booking process over WhatsApp was incredibly fast. Will choose again!",
        rating: 5,
        status: "Approved",
        createdAt: "2026-05-28"
    },
    {
        id: "rev-2",
        name: "Anupama Nair",
        comment: "The executive Traveller was highly comfortable for our 10-member family. Ambient lighting and sound system made the journey very enjoyable.",
        rating: 5,
        status: "Approved",
        createdAt: "2026-05-30"
    }
];

// Initialize localStorage databases
function initDatabase() {
    if (!localStorage.getItem('mut_vehicles')) localStorage.setItem('mut_vehicles', JSON.stringify(DEFAULT_VEHICLES));
    
    // Force reload vehicles database to incorporate updated fleet (v2)
    if (!localStorage.getItem('mut_vehicles_v2')) {
        localStorage.setItem('mut_vehicles', JSON.stringify(DEFAULT_VEHICLES));
        localStorage.setItem('mut_vehicles_v2', 'true');
    }
    
    // Force reload packages database to incorporate Trivandrum Airport and pricing-free items (v6)
    if (!localStorage.getItem('mut_packages_v6')) {
        localStorage.setItem('mut_packages', JSON.stringify(DEFAULT_PACKAGES));
        localStorage.setItem('mut_packages_v6', 'true');
    }
    
    if (!localStorage.getItem('mut_stories')) localStorage.setItem('mut_stories', JSON.stringify(DEFAULT_STORIES));
    
    // Force reload stories database to incorporate updated travel stories (v2)
    if (!localStorage.getItem('mut_stories_v2')) {
        localStorage.setItem('mut_stories', JSON.stringify(DEFAULT_STORIES));
        localStorage.setItem('mut_stories_v2', 'true');
    }
    
    if (!localStorage.getItem('mut_reviews')) localStorage.setItem('mut_reviews', JSON.stringify(DEFAULT_REVIEWS));
    if (!localStorage.getItem('mut_customers')) localStorage.setItem('mut_customers', JSON.stringify([]));
}
initDatabase();

let vehicles = JSON.parse(localStorage.getItem('mut_vehicles'));
let packages = JSON.parse(localStorage.getItem('mut_packages'));
let stories = JSON.parse(localStorage.getItem('mut_stories'));
let reviews = JSON.parse(localStorage.getItem('mut_reviews'));
let currentUser = JSON.parse(localStorage.getItem('mut_current_user')) || null;
let currentAdminLoggedIn = localStorage.getItem('mut_admin_active') === 'true';
let customers = JSON.parse(localStorage.getItem('mut_customers')) || [];

// Temporary variables to hold uploaded Base64 image files
let tempUploadedVehicleImageBase64 = "";
let tempUploadedPackageImageBase64 = "";

// Distances map
const DISTANCE_MATRIX = {
    "cochin-munnar": 130, "munnar-cochin": 130,
    "cochin-wayanad": 260, "wayanad-cochin": 260,
    "cochin-vagamon": 100, "vagamon-cochin": 100,
    "cochin-alleppey": 60, "alleppey-cochin": 60,
    "cochin-trivandrum": 200, "trivandrum-cochin": 200
};

// ==========================================
// SPA ROUTER
// ==========================================

function navigateTo(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(sec => {
        sec.classList.remove('active');
    });

    // Show target view
    const target = document.getElementById(`section-${viewId}`);
    if (target) {
        target.classList.add('active');
    }

    // Toggle active link states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('nav-link-active');
        if (link.getAttribute('data-view') === viewId) {
            link.classList.add('nav-link-active');
        }
    });

    // Handle mobile nav drawer auto close
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Custom view activations
    if (viewId === 'admin-dashboard') {
        if (!currentAdminLoggedIn) {
            navigateTo('admin-login');
        } else {
            renderAdminDashboard();
        }
    }
}

// Initial hooks
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.getAttribute('data-view');
            navigateTo(view);
        });
    });

    // Check URL Hash
    const checkHash = () => {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'admin' || hash === 'admin-login') {
            navigateTo('admin-login');
        } else if (hash === 'admin-dashboard') {
            navigateTo('admin-dashboard');
        } else if (['home', 'packages', 'vehicles', 'rent-cars', 'about', 'contact'].includes(hash)) {
            navigateTo(hash);
        } else {
            navigateTo('home');
        }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    // Limit date pickers to today
    const today = new Date().toISOString().split('T')[0];
    ['book-date', 'rent-date-start', 'rent-date-end'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.min = today;
    });

    // Setup photo upload listeners
    setupPhotoUploadListeners();

    // Initial renders
    renderVehicles();
    renderPackages();
    renderStories();
    renderReviews();
    updateAuthUI();
    setupCalculators();
});

// ==========================================
// DYNAMIC COMPONENT RENDERING
// ==========================================

function renderVehicles() {
    const mainVehiclesGrid = document.getElementById('vehicles-grid-inject');
    const rentCarsGrid = document.getElementById('rent-cars-grid-inject');
    const bookingSelect = document.getElementById('book-vehicle');
    const rentSelect = document.getElementById('rent-vehicle-select');

    if (mainVehiclesGrid) mainVehiclesGrid.innerHTML = "";
    if (rentCarsGrid) rentCarsGrid.innerHTML = "";
    if (bookingSelect) bookingSelect.innerHTML = `<option value="" disabled selected>Choose Car</option>`;
    if (rentSelect) rentSelect.innerHTML = `<option value="" disabled selected>Select Car Model</option>`;

    vehicles.forEach(v => {
        // 1. Render in Our Vehicles Section
        if (mainVehiclesGrid) {
            const card = document.createElement('div');
            card.className = "glass-panel rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/20 transition-all flex flex-col";
            card.innerHTML = `
                <div class="h-52 bg-zinc-900 relative">
                    <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                </div>
                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-3">
                        <h4 class="text-lg font-bold text-white">${v.name}</h4>
                        <span class="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-500/20 uppercase">${v.category}</span>
                    </div>
                    <p class="text-gray-400 text-xs leading-relaxed mb-6">Enjoy premium comfort, safety features, and experienced travel coordination. Excellent for short highway drops and hill resort tours.</p>
                    
                    <div class="grid grid-cols-2 gap-3 text-[11px] text-gray-300 mb-6 bg-white/2 p-3.5 rounded-xl border border-white/5">
                        <div><i class="fa-solid fa-users text-amber-400 mr-1.5 w-3"></i>${v.seats} Seats</div>
                        <div><i class="fa-solid fa-gauge-high text-amber-400 mr-1.5 w-3"></i>${v.type}</div>
                        <div><i class="fa-solid fa-gas-pump text-amber-400 mr-1.5 w-3"></i>${v.fuel}</div>
                        <div><i class="fa-solid fa-shield text-amber-400 mr-1.5 w-3"></i>VIP Kit</div>
                    </div>

                    <div class="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                        <div>
                            <span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">Available</span>
                        </div>
                        <button onclick="selectVehicleForTransit('${v.id}')" class="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-4.5 py-2.5 rounded-xl text-xs font-bold hover:shadow-lg transition-all cursor-pointer">
                            Reserve Transit
                        </button>
                    </div>
                </div>
            `;
            mainVehiclesGrid.appendChild(card);
        }

        // 2. Render in Rent A Car Section
        if (rentCarsGrid) {
            const card = document.createElement('div');
            card.className = "glass-panel rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1";
            card.innerHTML = `
                <div class="w-full h-44 bg-neutral-900 rounded-xl mb-4 overflow-hidden relative border border-white/5">
                    <img src="${v.image}" alt="${v.name}" class="w-full h-full object-cover">
                    <span class="absolute top-3 right-3 bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">Self-Drive</span>
                </div>
                <div class="text-left flex-1 flex flex-col justify-between">
                    <div>
                        <h4 class="text-base font-bold text-white tracking-wide">${v.name}</h4>
                        <p class="text-xs text-gray-400 mt-1 mb-4 flex items-center gap-3">
                            <span>⚡ ${v.type}</span> <span>•</span> <span>⛽ ${v.fuel}</span> <span>•</span> <span>👤 ${v.seats} Seats</span>
                        </p>
                    </div>
                    <div class="flex items-center justify-between pt-3 border-t border-white/5">
                        <div>
                            <span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded border border-emerald-500/20 uppercase tracking-wider">Available</span>
                        </div>
                        <button onclick="selectVehicleForRent('${v.id}')" class="bg-white/5 border border-white/10 hover:bg-amber-500 hover:text-black hover:border-transparent px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer">
                            Rent Car
                        </button>
                    </div>
                </div>
            `;
            rentCarsGrid.appendChild(card);
        }

        // 3. Update dropdown selections
        if (bookingSelect) {
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.innerText = v.name;
            bookingSelect.appendChild(opt);
        }
        if (rentSelect) {
            const opt = document.createElement('option');
            opt.value = v.id;
            opt.innerText = v.name;
            rentSelect.appendChild(opt);
        }
    });
}

function renderPackages() {
    const grid = document.getElementById('packages-grid-inject');
    if (!grid) return;
    grid.innerHTML = "";

    packages.forEach(p => {
        const card = document.createElement('div');
        card.className = "glass-panel rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/20 transition-all flex flex-col";
        card.innerHTML = `
            <div class="h-48 bg-zinc-900 relative">
                <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                <span class="absolute bottom-4 left-4 bg-amber-500 text-black text-[9px] font-black px-3 py-1 rounded-md tracking-wider uppercase">${p.duration}</span>
            </div>
            <div class="p-6 flex flex-col flex-1">
                <h4 class="text-lg font-bold mb-2 text-white">${p.title}</h4>
                <p class="text-gray-400 text-xs leading-relaxed mb-6">${p.desc}</p>
                <div class="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span class="text-[10px] text-amber-400/80 font-bold uppercase tracking-wider"><i class="fa-solid fa-star text-[8px] mr-1"></i>Premium Package</span>
                    <div class="flex space-x-1.5">
                        <button onclick="bookPackageWhatsApp('${p.id}')" class="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-5 py-2.5 rounded-xl text-xs font-bold hover:shadow-lg transition-all cursor-pointer">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderStories() {
    const list = document.getElementById('stories-list-inject');
    if (!list) return;
    list.innerHTML = "";

    const approvedStories = stories.filter(s => s.status === 'Approved');

    if (approvedStories.length === 0) {
        list.innerHTML = `<p class="text-gray-500 text-xs italic text-center w-full py-8">No travel stories published yet.</p>`;
        return;
    }

    approvedStories.forEach(s => {
        const item = document.createElement('div');
        item.className = "story-card p-5 bg-white/1 rounded-xl mb-4 text-left glass-panel-hover";
        item.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h4 class="font-bold text-white text-sm uppercase tracking-wide"><i class="fa-solid fa-map-location-dot text-amber-400 mr-1.5"></i>${s.title}</h4>
                <span class="text-[9px] text-gray-500 font-mono">${s.createdAt}</span>
            </div>
            <p class="text-gray-400 text-xs leading-relaxed mb-3">"${s.content}"</p>
            <div class="flex items-center space-x-2 text-[10px] text-gray-500 font-semibold">
                <span class="text-amber-500">Destination:</span>
                <span class="text-gray-300 font-bold">${s.place}</span>
                <span>•</span>
                <span>Published by ${s.author}</span>
            </div>
        `;
        list.appendChild(item);
    });
}

function renderReviews() {
    const grid = document.getElementById('reviews-grid-inject');
    if (!grid) return;
    grid.innerHTML = "";

    const approvedReviews = reviews.filter(r => r.status === 'Approved');

    if (approvedReviews.length === 0) {
        grid.innerHTML = `<p class="text-gray-500 text-xs italic text-center w-full py-8">No customer reviews published yet.</p>`;
        return;
    }

    approvedReviews.forEach(r => {
        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= r.rating) starsHtml += `<i class="fa-solid fa-star text-amber-400 text-[10px] mr-0.5"></i>`;
            else starsHtml += `<i class="fa-regular fa-star text-gray-600 text-[10px] mr-0.5"></i>`;
        }

        const card = document.createElement('div');
        card.className = "glass-panel p-5 rounded-2xl flex flex-col justify-between text-left";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-3">
                    <div class="flex">${starsHtml}</div>
                    <span class="text-[9px] text-gray-500 font-mono">${r.createdAt}</span>
                </div>
                <p class="text-gray-300 text-xs italic leading-relaxed mb-4">"${r.comment}"</p>
            </div>
            <div class="pt-3 border-t border-white/5 flex items-center space-x-2">
                <div class="w-6 h-6 bg-amber-500/10 rounded-full flex items-center justify-center text-[10px] text-amber-400 font-bold uppercase">${r.name[0]}</div>
                <span class="text-[11px] font-bold text-white">${r.name}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==========================================
// FORM SUMMARIES & CALCULATORS
// ==========================================

function setupCalculators() {
    const calcTriggers = ['book-from', 'book-to', 'book-vehicle'];
    calcTriggers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('change', calculateTransitFare);
    });

    const rentTriggers = ['rent-vehicle-select', 'rent-days-input'];
    rentTriggers.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', calculateRentalFare);
    });
}

function calculateTransitFare() {
    const fromVal = document.getElementById('book-from').value;
    const toVal = document.getElementById('book-to').value;
    const vehicleId = document.getElementById('book-vehicle').value;

    if (!fromVal || !toVal || !vehicleId) {
        return null;
    }

    const lookupKey = `${fromVal.toLowerCase()}-${toVal.toLowerCase()}`;
    const reverseLookupKey = `${toVal.toLowerCase()}-${fromVal.toLowerCase()}`;
    let distance = DISTANCE_MATRIX[lookupKey] || DISTANCE_MATRIX[reverseLookupKey] || 100;

    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return null;

    let baseTransit = distance * vehicle.pricePerKm;
    let allowance = vehicle.allowance;
    let total = baseTransit + allowance;

    return { distance, baseTransit, allowance, total, vehicleName: vehicle.name };
}

function calculateRentalFare() {
    const vehicleId = document.getElementById('rent-vehicle-select').value;
    const days = parseInt(document.getElementById('rent-days-input').value) || 0;

    if (!vehicleId || days <= 0) {
        return null;
    }

    const vehicle = vehicles.find(v => v.id === vehicleId);
    if (!vehicle) return null;

    let total = vehicle.pricePerDay * days;

    return { total, days, vehicleName: vehicle.name, pricePerDay: vehicle.pricePerDay };
}

// ==========================================
// WHATSAPP RESERVATION REDIRECT ENGINE
// ==========================================

function handleTransitBooking() {
    const agree = document.getElementById('transit-agree-terms');
    if (agree && !agree.checked) {
        alert("Please review and agree to the Terms & Conditions before booking.");
        return;
    }

    const fromVal = document.getElementById('book-from').value;
    const toVal = document.getElementById('book-to').value;
    const dateVal = document.getElementById('book-date').value;
    const returnDateVal = document.getElementById('book-return-date').value;
    const vehicleId = document.getElementById('book-vehicle').value;
    const passengersVal = document.getElementById('book-passengers').value;

    if (!fromVal || !toVal || !dateVal || !vehicleId) {
        alert("Please select required fields: From, To, Date, and Vehicle.");
        return;
    }

    const pricing = calculateTransitFare();
    if (!pricing) return;

    const name = currentUser ? currentUser.name : "Guest Customer";
    const email = currentUser ? currentUser.email : "Guest Email";
    const phone = currentUser ? currentUser.phone : "Guest Phone";

    const msg = `Hello Manu Uncle Travels! I would like to book a POINT-TO-POINT TRANSIT:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Route: ${fromVal} ➔ ${toVal}
- Date: ${dateVal} ${returnDateVal ? `(Return: ${returnDateVal})` : ""}
- Vehicle Class: ${pricing.vehicleName}
- Passengers: ${passengersVal}
- Estimated Distance: ${pricing.distance} km

Please confirm availability and provide a quote. Thank you!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function handleRentalBooking() {
    const agree = document.getElementById('rent-agree-terms');
    if (agree && !agree.checked) {
        alert("Please review and agree to the Terms & Conditions before booking.");
        return;
    }

    const vehicleId = document.getElementById('rent-vehicle-select').value;
    const startVal = document.getElementById('rent-date-start').value;
    const daysVal = parseInt(document.getElementById('rent-days-input').value) || 0;
    const pickupVal = document.getElementById('rent-pickup-location').value;
    const driverChoice = document.getElementById('rent-driver-choice').value;

    if (!vehicleId || !startVal || daysVal <= 0 || !pickupVal) {
        alert("Please complete the booking fields: Vehicle, Pick-up Date, Days, and Location.");
        return;
    }

    const pricing = calculateRentalFare();
    if (!pricing) return;

    const name = currentUser ? currentUser.name : "Guest Customer";
    const email = currentUser ? currentUser.email : "Guest Email";
    const phone = currentUser ? currentUser.phone : "Guest Phone";

    const msg = `Hello Manu Uncle Travels! I want to request a VEHICLE RENTAL:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Vehicle Model: ${pricing.vehicleName}
- Pickup Date: ${startVal}
- Rental Duration: ${daysVal} Day(s)
- Pickup Location: ${pickupVal}
- Driving Preference: ${driverChoice === 'self' ? 'Self-Drive (No Driver)' : 'With Chauffeur Guide'}

Please verify fleet readiness and provide a rental rate quote. Thank you!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function bookPackageWhatsApp(pkgId) {
    const pkg = packages.find(p => p.id === pkgId);
    if (!pkg) return;

    const name = currentUser ? currentUser.name : "Guest Customer";
    const email = currentUser ? currentUser.email : "Guest Email";
    const phone = currentUser ? currentUser.phone : "Guest Phone";
    
    const msg = `Hello Manu Uncle Travels! I would like to book the HOLIDAY PACKAGE:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Package Title: ${pkg.title}
- Duration: ${pkg.duration}
- Selected Transit: ${pkg.duration.includes('3 Days') ? 'Premium Sedan' : pkg.duration.includes('2 Days') ? 'Luxury SUV' : 'Premium Traveller'}

Please confirm booking slots. Thank you!`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function selectVehicleForTransit(vehId) {
    navigateTo('home');
    const sel = document.getElementById('book-vehicle');
    if (sel) {
        sel.value = vehId;
        calculateTransitFare();
    }
    const card = document.getElementById('booking-card');
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function selectVehicleForRent(vehId) {
    navigateTo('rent-cars');
    const sel = document.getElementById('rent-vehicle-select');
    if (sel) {
        sel.value = vehId;
        calculateRentalFare();
    }
    const form = document.getElementById('rent-car-form');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ==========================================
// FILE UPLOAD READERS (BASE64 FILE READER)
// ==========================================

function setupPhotoUploadListeners() {
    const vehFile = document.getElementById('veh-in-file');
    if (vehFile) {
        vehFile.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    tempUploadedVehicleImageBase64 = e.target.result;
                    // Provide tiny visual feedback
                    const helper = document.getElementById('veh-file-helper');
                    if (helper) helper.innerText = "✓ Photo uploaded successfully!";
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    const pkgFile = document.getElementById('pkg-in-file');
    if (pkgFile) {
        pkgFile.addEventListener('change', function() {
            if (this.files && this.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    tempUploadedPackageImageBase64 = e.target.result;
                    const helper = document.getElementById('pkg-file-helper');
                    if (helper) helper.innerText = "✓ Image uploaded successfully!";
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    }
}

// ==========================================
// RATINGS FEEDBACK POPUPS
// ==========================================

function openReviewModal() {
    if (!currentUser) {
        openAuthModal('google'); // Opens Google modal
        return;
    }
    document.getElementById('review-modal-form').reset();
    const modal = document.getElementById('review-submit-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeReviewModal() {
    const modal = document.getElementById('review-submit-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    const rating = parseInt(document.getElementById('review-input-rating').value);
    const comment = document.getElementById('review-input-comment').value.trim();

    if (!rating || !comment) {
        alert("Please select a rating and enter comment feedback.");
        return;
    }

    const newReview = {
        id: "rev-" + Date.now(),
        name: currentUser.name,
        comment,
        rating,
        status: "Pending Approval",
        createdAt: new Date().toISOString().split('T')[0]
    };

    reviews.push(newReview);
    localStorage.setItem('mut_reviews', JSON.stringify(reviews));
    closeReviewModal();
}

// ==========================================
// MOCK GOOGLE AUTHENTICATION
// ==========================================

function openAuthModal(mode = 'google') {
    const form = document.getElementById('google-auth-form');
    if (form) form.reset();
    const modal = document.getElementById('google-auth-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeAuthModal() {
    const modal = document.getElementById('google-auth-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handleGoogleAuthSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('g-auth-name').value.trim();
    const email = document.getElementById('g-auth-email').value.trim();
    const phone = document.getElementById('g-auth-phone').value.trim();

    if (name && email && phone) {
        currentUser = { name, email, phone };
        localStorage.setItem('mut_current_user', JSON.stringify(currentUser));

        // Add to customers logs list
        const newCustomer = {
            id: "cust-" + Date.now(),
            name,
            email,
            phone,
            timestamp: new Date().toLocaleString()
        };
        customers.push(newCustomer);
        localStorage.setItem('mut_customers', JSON.stringify(customers));

        updateAuthUI();
        closeAuthModal();
        alert(`Signed in successfully as ${name} (${email}) using Google.`);
        renderCustomers();
    }
}

function renderCustomers() {
    const customersTable = document.getElementById('admin-customers-tbody');
    if (!customersTable) return;

    customersTable.innerHTML = "";
    if (customers.length === 0) {
        customersTable.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                    No logged-in customers registered in the database yet.
                </td>
            </tr>
        `;
        return;
    }

    customers.forEach(c => {
        const tr = document.createElement('tr');
        tr.className = "border-b border-white/5 hover:bg-white/2 transition-colors";
        tr.innerHTML = `
            <td class="px-6 py-4 font-mono text-[10px] text-gray-400">${c.id}</td>
            <td class="px-6 py-4 font-bold text-white">${c.name}</td>
            <td class="px-6 py-4 text-gray-300 font-mono">${c.email}</td>
            <td class="px-6 py-4 text-gray-300 font-mono">${c.phone}</td>
            <td class="px-6 py-4 text-right text-gray-400 font-mono text-[10px]">${c.timestamp}</td>
        `;
        customersTable.appendChild(tr);
    });
}

function clearCustomersList() {
    if (confirm("Are you sure you want to clear the logged-in customers directory?")) {
        customers = [];
        localStorage.setItem('mut_customers', JSON.stringify(customers));
        renderCustomers();
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('mut_current_user');
    updateAuthUI();
    alert("Signed out successfully.");
    navigateTo('home');
}

function updateAuthUI() {
    const btnNavAuth = document.getElementById('btn-nav-auth');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profileName = document.getElementById('profile-name');

    if (currentUser) {
        if (btnNavAuth) btnNavAuth.classList.add('hidden');
        if (profileDropdown) profileDropdown.classList.remove('hidden');
        if (profileName) profileName.innerText = currentUser.name;
    } else {
        if (btnNavAuth) btnNavAuth.classList.remove('hidden');
        if (profileDropdown) profileDropdown.classList.add('hidden');
    }
}

function toggleProfileMenu() {
    const menu = document.getElementById('profile-dropdown-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Close profiles dropdown if clicked outside
window.addEventListener('click', (e) => {
    const dropdown = document.getElementById('profile-dropdown');
    const menu = document.getElementById('profile-dropdown-menu');
    if (dropdown && menu && !dropdown.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// ==========================================
// ADMIN AUTHENTICATION
// ==========================================

function handleAdminLogin(e) {
    e.preventDefault();
    const email = document.getElementById('admin-email').value.trim();
    const pass = document.getElementById('admin-password').value;

    if (email === 'admin' && pass === 'admin') {
        currentAdminLoggedIn = true;
        localStorage.setItem('mut_admin_active', 'true');
        alert("Access Granted: Admin Control Center Activated.");
        navigateTo('admin-dashboard');
    } else {
        alert("Access Denied: Invalid credentials.");
    }
}

function adminLogout() {
    currentAdminLoggedIn = false;
    localStorage.setItem('mut_admin_active', 'false');
    alert("Admin logged out.");
    navigateTo('home');
}

function renderAdminDashboard() {
    const vehiclesTable = document.getElementById('admin-vehicles-tbody');
    const packagesTable = document.getElementById('admin-packages-tbody');
    const storiesTable = document.getElementById('admin-stories-tbody');
    const reviewsTable = document.getElementById('admin-reviews-tbody');

    // 1. Render Vehicles List
    if (vehiclesTable) {
        vehiclesTable.innerHTML = "";
        vehicles.forEach(v => {
            const tr = document.createElement('tr');
            tr.className = "border-b border-white/5 hover:bg-white/2 transition-colors";
            tr.innerHTML = `
                <td class="px-6 py-4 font-bold text-amber-400">${v.id}</td>
                <td class="px-6 py-4 font-medium text-white">${v.name}</td>
                <td class="px-6 py-4 text-gray-300 capitalize">${v.category} (${v.type}/${v.fuel})</td>
                <td class="px-6 py-4 text-gray-300">₹${v.pricePerKm}/km</td>
                <td class="px-6 py-4 text-gray-300">₹${v.pricePerDay}/day</td>
                <td class="px-6 py-4 text-right">
                    <button onclick="openVehicleEditModal('${v.id}')" class="text-xs text-amber-400 hover:underline mr-3 cursor-pointer"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button onclick="deleteVehicle('${v.id}')" class="text-xs text-red-400 hover:underline cursor-pointer"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;
            vehiclesTable.appendChild(tr);
        });
    }

    // 2. Render Packages List
    if (packagesTable) {
        packagesTable.innerHTML = "";
        packages.forEach(p => {
            const tr = document.createElement('tr');
            tr.className = "border-b border-white/5 hover:bg-white/2 transition-colors";
            tr.innerHTML = `
                <td class="px-6 py-4 font-bold text-amber-400">${p.id}</td>
                <td class="px-6 py-4 font-medium text-white">${p.title}</td>
                <td class="px-6 py-4 text-gray-300">${p.duration}</td>
                <td class="px-6 py-4 text-right">
                    <button onclick="openPackageEditModal('${p.id}')" class="text-xs text-amber-400 hover:underline mr-3 cursor-pointer"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button onclick="deletePackage('${p.id}')" class="text-xs text-red-400 hover:underline cursor-pointer"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;
            packagesTable.appendChild(tr);
        });
    }

    // 3. Render Stories List (Admin Control)
    if (storiesTable) {
        storiesTable.innerHTML = "";
        stories.forEach(s => {
            const tr = document.createElement('tr');
            tr.className = "border-b border-white/5 hover:bg-white/2 transition-colors";
            tr.innerHTML = `
                <td class="px-6 py-4 font-bold text-amber-400">${s.id}</td>
                <td class="px-6 py-4">
                    <div class="text-white font-bold text-xs">${s.title}</div>
                    <div class="text-[10px] text-gray-500">Destination: ${s.place}</div>
                </td>
                <td class="px-6 py-4 text-gray-300 max-w-xs truncate">${s.content}</td>
                <td class="px-6 py-4 text-right">
                    <button onclick="openStoryEditModal('${s.id}')" class="text-xs text-amber-400 hover:underline mr-3 cursor-pointer"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    <button onclick="deleteStory('${s.id}')" class="text-xs text-red-400 hover:underline cursor-pointer"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;
            storiesTable.appendChild(tr);
        });
    }

    // 4. Render Reviews List (Moderation Queue)
    if (reviewsTable) {
        reviewsTable.innerHTML = "";
        reviews.forEach(r => {
            const isApproved = r.status === 'Approved';
            const tr = document.createElement('tr');
            tr.className = "border-b border-white/5 hover:bg-white/2 transition-colors";
            tr.innerHTML = `
                <td class="px-6 py-4 font-bold text-amber-400">${r.id}</td>
                <td class="px-6 py-4 font-bold text-white">${r.name}</td>
                <td class="px-6 py-4 text-amber-400 text-xs">${r.rating} Stars</td>
                <td class="px-6 py-4 text-gray-300 max-w-xs truncate">${r.comment}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold ${isApproved ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}">
                        ${r.status}
                    </span>
                </td>
                <td class="px-6 py-4 text-right">
                    ${!isApproved ? `<button onclick="approveReview('${r.id}')" class="text-xs text-green-400 hover:underline mr-3 cursor-pointer"><i class="fa-solid fa-check"></i> Approve</button>` : ''}
                    <button onclick="deleteReview('${r.id}')" class="text-xs text-red-400 hover:underline cursor-pointer"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            `;
            reviewsTable.appendChild(tr);
        });
    }

    // 5. Render Logged-in Customers Directory
    renderCustomers();
}

// ==========================================
// ADMIN CONTROL OVER CATALOGS (CRUD OPERATIONS)
// ==========================================

// Vehicle Operations
let editingVehicleId = null;

function openVehicleAddModal() {
    editingVehicleId = null;
    tempUploadedVehicleImageBase64 = "";
    document.getElementById('veh-editor-title').innerText = "Add New Vehicle";
    document.getElementById('veh-editor-form').reset();
    const helper = document.getElementById('veh-file-helper');
    if (helper) helper.innerText = "Choose an image file from your device";
    const modal = document.getElementById('vehicle-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function openVehicleEditModal(vehId) {
    const v = vehicles.find(item => item.id === vehId);
    if (!v) return;

    editingVehicleId = vehId;
    tempUploadedVehicleImageBase64 = "";
    document.getElementById('veh-editor-title').innerText = `Edit Vehicle: ${v.name}`;
    
    document.getElementById('veh-in-name').value = v.name;
    document.getElementById('veh-in-category').value = v.category;
    document.getElementById('veh-in-type').value = v.type;
    document.getElementById('veh-in-fuel').value = v.fuel;
    document.getElementById('veh-in-seats').value = v.seats;
    document.getElementById('veh-in-pricekm').value = v.pricePerKm;
    document.getElementById('veh-in-priceday').value = v.pricePerDay;
    document.getElementById('veh-in-allowance').value = v.allowance;

    const helper = document.getElementById('veh-file-helper');
    if (helper) helper.innerText = "Optional: Choose a new image file to replace";

    const modal = document.getElementById('vehicle-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeVehicleCrudModal() {
    const modal = document.getElementById('vehicle-crud-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handleVehicleSave(e) {
    e.preventDefault();
    const name = document.getElementById('veh-in-name').value.trim();
    const category = document.getElementById('veh-in-category').value;
    const type = document.getElementById('veh-in-type').value;
    const fuel = document.getElementById('veh-in-fuel').value;
    const seats = parseInt(document.getElementById('veh-in-seats').value) || 4;
    const pricePerKm = parseInt(document.getElementById('veh-in-pricekm').value) || 20;
    const pricePerDay = parseInt(document.getElementById('veh-in-priceday').value) || 3000;
    const allowance = parseInt(document.getElementById('veh-in-allowance').value) || 500;

    let image = tempUploadedVehicleImageBase64;

    if (editingVehicleId) {
        // Edit Mode
        const idx = vehicles.findIndex(v => v.id === editingVehicleId);
        if (idx !== -1) {
            // Keep previous image if no new file uploaded
            if (!image) image = vehicles[idx].image;

            vehicles[idx] = {
                ...vehicles[idx],
                name, category, type, fuel, seats, pricePerKm, pricePerDay, allowance, image,
                specSummary: `⚡ ${type} • ⛽ ${fuel} • 👤 ${seats} Seats`
            };
        }
    } else {
        // Add Mode
        if (!image) {
            image = category === 'suv' ? 'assets/fleet_suv.png' : category === 'sedan' ? 'assets/fleet_sedan.png' : 'assets/fleet_traveller.png';
        }
        const newVeh = {
            id: "veh-" + Date.now(),
            name, category, type, fuel, seats, pricePerKm, pricePerDay, allowance, image,
            specSummary: `⚡ ${type} • ⛽ ${fuel} • 👤 ${seats} Seats`
        };
        vehicles.push(newVeh);
    }

    localStorage.setItem('mut_vehicles', JSON.stringify(vehicles));
    renderVehicles();
    renderAdminDashboard();
    closeVehicleCrudModal();
    alert("Vehicle catalogue saved successfully.");
}

function deleteVehicle(vehId) {
    if (confirm("Are you sure you want to delete this vehicle from catalogs?")) {
        vehicles = vehicles.filter(v => v.id !== vehId);
        localStorage.setItem('mut_vehicles', JSON.stringify(vehicles));
        renderVehicles();
        renderAdminDashboard();
    }
}

// Package Operations
let editingPackageId = null;

function openPackageAddModal() {
    editingPackageId = null;
    tempUploadedPackageImageBase64 = "";
    document.getElementById('pkg-editor-title').innerText = "Add New Tour Package";
    document.getElementById('pkg-editor-form').reset();
    const helper = document.getElementById('pkg-file-helper');
    if (helper) helper.innerText = "Choose an image file from your device";
    const modal = document.getElementById('package-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function openPackageEditModal(pkgId) {
    const p = packages.find(item => item.id === pkgId);
    if (!p) return;

    editingPackageId = pkgId;
    tempUploadedPackageImageBase64 = "";
    document.getElementById('pkg-editor-title').innerText = `Edit Package: ${p.title}`;

    document.getElementById('pkg-in-title').value = p.title;
    document.getElementById('pkg-in-duration').value = p.duration;
    document.getElementById('pkg-in-vehicle').value = p.vehicleKey || "luxury-sedan";
    document.getElementById('pkg-in-desc').value = p.desc;

    const helper = document.getElementById('pkg-file-helper');
    if (helper) helper.innerText = "Optional: Choose a new image file to replace";

    const modal = document.getElementById('package-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closePackageCrudModal() {
    const modal = document.getElementById('package-crud-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handlePackageSave(e) {
    e.preventDefault();
    const title = document.getElementById('pkg-in-title').value.trim();
    const duration = document.getElementById('pkg-in-duration').value.trim();
    const vehicleKey = document.getElementById('pkg-in-vehicle').value;
    const desc = document.getElementById('pkg-in-desc').value.trim();

    let image = tempUploadedPackageImageBase64;

    if (editingPackageId) {
        // Edit Mode
        const idx = packages.findIndex(p => p.id === editingPackageId);
        if (idx !== -1) {
            if (!image) image = packages[idx].image;
            packages[idx] = {
                ...packages[idx],
                title, duration, vehicleKey, desc, image
            };
        }
    } else {
        // Add Mode
        if (!image) {
            image = 'assets/munnar.png';
        }
        const newPkg = {
            id: "pkg-" + Date.now(),
            title, duration, vehicleKey, desc, image
        };
        packages.push(newPkg);
    }

    localStorage.setItem('mut_packages', JSON.stringify(packages));
    renderPackages();
    renderAdminDashboard();
    closePackageCrudModal();
    alert("Holiday package saved successfully.");
}

function deletePackage(pkgId) {
    if (confirm("Are you sure you want to delete this holiday package?")) {
        packages = packages.filter(p => p.id !== pkgId);
        localStorage.setItem('mut_packages', JSON.stringify(packages));
        renderPackages();
        renderAdminDashboard();
    }
}

// Stories Admin CRUD Operations (Added/Edited/Deleted by Admin only)
let editingStoryId = null;

function openStoryAddModal() {
    editingStoryId = null;
    document.getElementById('story-editor-title').innerText = "Add New Travel Story (Yathrakal)";
    document.getElementById('story-crud-form').reset();
    const modal = document.getElementById('story-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function openStoryEditModal(storyId) {
    const s = stories.find(item => item.id === storyId);
    if (!s) return;

    editingStoryId = storyId;
    document.getElementById('story-editor-title').innerText = `Edit Travel Story: ${s.title}`;
    
    document.getElementById('story-in-title').value = s.title;
    document.getElementById('story-in-place').value = s.place;
    document.getElementById('story-in-content').value = s.content;

    const modal = document.getElementById('story-crud-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeStoryCrudModal() {
    const modal = document.getElementById('story-crud-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function handleStorySave(e) {
    e.preventDefault();
    const title = document.getElementById('story-in-title').value.trim();
    const place = document.getElementById('story-in-place').value.trim();
    const content = document.getElementById('story-in-content').value.trim();

    if (editingStoryId) {
        // Edit Mode
        const idx = stories.findIndex(s => s.id === editingStoryId);
        if (idx !== -1) {
            stories[idx] = {
                ...stories[idx],
                title, place, content
            };
        }
    } else {
        // Add Mode
        const newStory = {
            id: "story-" + Date.now(),
            title,
            place,
            author: "Admin Manager",
            content,
            status: "Approved", // Admins publish directly
            createdAt: new Date().toISOString().split('T')[0]
        };
        stories.push(newStory);
    }

    localStorage.setItem('mut_stories', JSON.stringify(stories));
    renderStories();
    renderAdminDashboard();
    closeStoryCrudModal();
    alert("Travel story saved successfully.");
}

function deleteStory(storyId) {
    if (confirm("Are you sure you want to delete this travel story?")) {
        stories = stories.filter(s => s.id !== storyId);
        localStorage.setItem('mut_stories', JSON.stringify(stories));
        renderStories();
        renderAdminDashboard();
    }
}

// Reviews Moderation Queue
function approveReview(reviewId) {
    const r = reviews.find(item => item.id === reviewId);
    if (r) {
        r.status = 'Approved';
        localStorage.setItem('mut_reviews', JSON.stringify(reviews));
        renderReviews();
        renderAdminDashboard();
        alert(`Review by "${r.name}" approved and published.`);
    }
}

function deleteReview(reviewId) {
    if (confirm("Are you sure you want to delete this customer feedback review?")) {
        reviews = reviews.filter(r => r.id !== reviewId);
        localStorage.setItem('mut_reviews', JSON.stringify(reviews));
        renderReviews();
        renderAdminDashboard();
    }
}

// Expose handlers on window
window.navigateTo = navigateTo;
window.bookPackageWhatsApp = bookPackageWhatsApp;
window.selectVehicleForTransit = selectVehicleForTransit;
window.selectVehicleForRent = selectVehicleForRent;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.handleGoogleAuthSubmit = handleGoogleAuthSubmit;
window.clearCustomersList = clearCustomersList;
window.renderCustomers = renderCustomers;
window.logout = logout;
window.toggleProfileMenu = toggleProfileMenu;
window.handleTransitBooking = handleTransitBooking;
window.handleRentalBooking = handleRentalBooking;

window.handleAdminLogin = handleAdminLogin;
window.adminLogout = adminLogout;

// Reviews
window.openReviewModal = openReviewModal;
window.closeReviewModal = closeReviewModal;
window.handleReviewSubmit = handleReviewSubmit;

// Vehicle CRUD
window.openVehicleAddModal = openVehicleAddModal;
window.openVehicleEditModal = openVehicleEditModal;
window.closeVehicleCrudModal = closeVehicleCrudModal;
window.handleVehicleSave = handleVehicleSave;
window.deleteVehicle = deleteVehicle;

// Package CRUD
window.openPackageAddModal = openPackageAddModal;
window.openPackageEditModal = openPackageEditModal;
window.closePackageCrudModal = closePackageCrudModal;
window.handlePackageSave = handlePackageSave;
window.deletePackage = deletePackage;

// Story CRUD (Admin control)
window.openStoryAddModal = openStoryAddModal;
window.openStoryEditModal = openStoryEditModal;
window.closeStoryCrudModal = closeStoryCrudModal;
window.handleStorySave = handleStorySave;
window.deleteStory = deleteStory;

// Review Moderation
window.approveReview = approveReview;
window.deleteReview = deleteReview;

function handleSiteSearch(query) {
    const q = query.trim().toLowerCase();
    
    // Secret trigger: if user types "admin", redirect to admin login view!
    if (q === 'admin') {
        navigateTo('admin-login');
        // Clear all site search inputs
        const searchInputs = document.querySelectorAll('.site-search-input');
        searchInputs.forEach(input => input.value = "");
        return;
    }
    
    filterCataloguesBySearch(q);
}

function filterCataloguesBySearch(q) {
    // Filter package cards
    const packageGrid = document.getElementById('packages-grid-inject');
    if (packageGrid) {
        const cards = packageGrid.children;
        packages.forEach((p, idx) => {
            const card = cards[idx];
            if (card) {
                const matches = p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
                card.style.display = matches ? 'flex' : 'none';
            }
        });
    }

    // Filter fleet vehicle cards
    const vehicleGrid = document.getElementById('vehicles-grid-inject');
    if (vehicleGrid) {
        const cards = vehicleGrid.children;
        vehicles.forEach((v, idx) => {
            const card = cards[idx];
            if (card) {
                const matches = v.name.toLowerCase().includes(q) || v.category.toLowerCase().includes(q);
                card.style.display = matches ? 'flex' : 'none';
            }
        });
    }

    // Filter rent vehicle cards
    const rentGrid = document.getElementById('rent-cars-grid-inject');
    if (rentGrid) {
        const cards = rentGrid.children;
        vehicles.forEach((v, idx) => {
            const card = cards[idx];
            if (card) {
                const matches = v.name.toLowerCase().includes(q) || v.category.toLowerCase().includes(q);
                card.style.display = matches ? 'flex' : 'none';
            }
        });
    }
}

window.handleSiteSearch = handleSiteSearch;
window.filterCataloguesBySearch = filterCataloguesBySearch;

function openTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeTermsModal() {
    const modal = document.getElementById('terms-modal');
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
    }
}

window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;


