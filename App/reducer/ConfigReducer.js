import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name:"config",
    initialState:{
        bulan:[
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        hari:[
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jum'at",
            "Sabtu",
        ],
        tanggal:[
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,
        ]
    },
    reducers:{

    }
})

export const { } = configSlice.actions
export default configSlice.reducer