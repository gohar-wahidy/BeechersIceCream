// src/utils/Time.js

export function checkStoreStatus(isTemporarilyClosed) {
    if (isTemporarilyClosed) {
        return {
        statusMessage: "Temporarily Closed due to Season",
        storeStatus: "closed"
        };
    }
    const currentDate = new Date();
    const options = { timeZone: "America/Chicago", hour12: false };
    const currentTime = new Date(currentDate.toLocaleString("en-US", options));

    const hours = {
        sunday: [
            { open: 12, close: 21 }
        ],
        monday: [
            { open: 12, close: 21 }
        ],
        tuesday: [
            { open: 12, close: 21 }
        ],
        wednesday: [
            { open: 12, close: 21 }
        ],
        thursday: [
            { open: 12, close: 21 }
        ],
        friday: [
            { open: 12, close: 22 }
        ],
        saturday: [
            { open: 12, close: 20 }
        ]
    };

    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const currentDay = daysOfWeek[currentTime.getDay()];
    const currentHour = currentTime.getHours() + currentTime.getMinutes() / 60;

    const storeHours = hours[currentDay];
    let storeStatus = "closed";
    let statusMessage = "We are Closed right now";

    for (const timeRange of storeHours) {
        if (currentHour >= timeRange.open && currentHour < timeRange.close) {
            storeStatus = "open";
            statusMessage = "We are Open right now!";
            break;
        }
    }

    return { statusMessage, storeStatus };
}