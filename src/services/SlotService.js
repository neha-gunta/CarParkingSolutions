import axios from "axios";

const SLOTS_API_BASE_URL = "http://localhost:8080/api/v1/details"

class SlotService{

    getSlots(){
        return axios.get(SLOTS_API_BASE_URL);
    }

    createSlots(slot){
        return axios.post(SLOTS_API_BASE_URL, slot);
    }

    getSlotById(slotId){
        return axios.get(SLOTS_API_BASE_URL + "/" + slotId);
    }

    getSlotsByLocation(location){
        return axios.get(SLOTS_API_BASE_URL, location);
    }

    updateSlot(slot, slotId){
        return axios.put(SLOTS_API_BASE_URL + "/" + slotId, slot);
    }

    deleteSlot(slotId){
        return axios.delete(SLOTS_API_BASE_URL + "/" + slotId);
    }

}

export default new SlotService()