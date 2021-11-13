import api, {ApiResponse} from "../api/api";

export class ScheduleService {
    static async getSchedules(page: number = 0): Promise<ScheduleListResponse> {
        return new Promise<ScheduleListResponse>((resolve, reject) => {
            api.get<ApiResponse<ScheduleListResponse>>(`/schedules?page=${page}`)
                .then(res => resolve(res.result))
                .catch(err => reject(err))
        })
    }

    static async getSchedule(scheduleId: number): Promise<Schedule> {
        return new Promise<Schedule>((resolve, reject) => {
            api.get<ApiResponse<Schedule>>(`/schedules/${scheduleId}`)
                .then(res => resolve(res.result))
                .catch(err => reject(err))
        })
    }

    static async registerSchedule(
        title: string,
        details: string,
        place: string,
        fixedNumberOfPeople: number,
        startDateTime: Date,
        endDateTime: Date,
    ): Promise<IdResponse> {
        return new Promise<IdResponse>((resolve, reject) => {
            api.post<ApiResponse<IdResponse>>("/schedules", {
                "title": title,
                "details": details,
                "place": place,
                "fixedNumberOfPeople": fixedNumberOfPeople,
                "startDateTime": startDateTime,
                "endDateTime": endDateTime,
            })
                .then(res => resolve(res.result))
                .catch(err => reject(err))
        })
    }
}

export type Schedule = {
    scheduleId: number,
    title: string
    details: string,
    nickname: string,
    place: string,
    status: string,
    currentNumberOfPeople: number,
    fixedNumberOfPeople: number,
    numberOfPeopleWaiting: number,
    startDateTime: Date,
    endDateTime: Date,
}

export type ScheduleListResponse = {
    content: Array<Schedule>,
    hasNext: boolean,
    currentPageNumber: number,
}

export type ScheduleRegistrationRequest = {
    title: string
    details: string,
    place: string,
    fixedNumberOfPeople: number,
    startDateTime: Date,
    endDateTime: Date,
}

export type IdResponse = {
    scheduleId: number
}