define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });

    var rData = [
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 43
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 30,
            'ProCost': 29
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 125,
            'ProCost': 96
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 215,
            'ProCost': 123
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 263,
            'ProCost': 125
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 61,
            'ProCost': 50
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 31
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 133,
            'ProCost': 110
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 65
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 37,
            'ProCost': 20
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 109,
            'ProCost': 96
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 266,
            'ProCost': 139
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 257,
            'ProCost': 143
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 79,
            'ProCost': 53
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 28,
            'ProCost': 48
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 128,
            'ProCost': 117
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 68,
            'ProCost': 48
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 32
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 141,
            'ProCost': 98
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 134
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 107
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 73,
            'ProCost': 49
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 44
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 149,
            'ProCost': 82
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 47,
            'ProCost': 58
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 25,
            'ProCost': 40
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 127,
            'ProCost': 93
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 216,
            'ProCost': 124
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 267,
            'ProCost': 100
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 65
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 39,
            'ProCost': 33
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 142,
            'ProCost': 97
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 53,
            'ProCost': 49
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 44
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 113,
            'ProCost': 106
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 270,
            'ProCost': 101
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 284,
            'ProCost': 105
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 62,
            'ProCost': 43
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 32,
            'ProCost': 26
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 133,
            'ProCost': 83
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 51,
            'ProCost': 65
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 25
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 101
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 297,
            'ProCost': 130
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 236,
            'ProCost': 119
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 57,
            'ProCost': 66
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 27
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 110,
            'ProCost': 93
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 49
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 32,
            'ProCost': 39
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 128,
            'ProCost': 120
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 290,
            'ProCost': 128
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 201,
            'ProCost': 105
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 46
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 37
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 122,
            'ProCost': 118
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 69,
            'ProCost': 54
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 21,
            'ProCost': 41
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 83
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 239,
            'ProCost': 121
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 283,
            'ProCost': 127
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 40
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 33,
            'ProCost': 40
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 81
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 41,
            'ProCost': 69
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 14,
            'ProCost': 21
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 93
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 294,
            'ProCost': 146
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 217,
            'ProCost': 103
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 49,
            'ProCost': 44
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 36,
            'ProCost': 21
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 115
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 56,
            'ProCost': 41
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 17,
            'ProCost': 36
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 81
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 274,
            'ProCost': 109
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 284,
            'ProCost': 145
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 40,
            'ProCost': 49
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 12,
            'ProCost': 28
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 150,
            'ProCost': 115
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 73,
            'ProCost': 64
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 47
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 102,
            'ProCost': 112
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 252,
            'ProCost': 112
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 131
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 46
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 35,
            'ProCost': 30
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 104,
            'ProCost': 101
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 40
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 31
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 89
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 227,
            'ProCost': 130
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 226,
            'ProCost': 144
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 40,
            'ProCost': 52
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 19,
            'ProCost': 40
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 127,
            'ProCost': 91
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 70,
            'ProCost': 66
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 36,
            'ProCost': 21
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 85
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 212,
            'ProCost': 130
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 210,
            'ProCost': 110
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 56
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 47
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 98
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 59,
            'ProCost': 54
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 21
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 97
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 299,
            'ProCost': 124
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 110
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 71,
            'ProCost': 61
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 40,
            'ProCost': 33
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 134,
            'ProCost': 111
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 50
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 25
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 139,
            'ProCost': 85
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 217,
            'ProCost': 141
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 252,
            'ProCost': 101
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 31,
            'ProCost': 42
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 15,
            'ProCost': 27
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 117,
            'ProCost': 112
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 34,
            'ProCost': 40
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 10,
            'ProCost': 43
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 110,
            'ProCost': 83
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 212,
            'ProCost': 137
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 126
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 75,
            'ProCost': 49
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 37
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 105,
            'ProCost': 98
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 45
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 45
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 143,
            'ProCost': 92
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 272,
            'ProCost': 128
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 208,
            'ProCost': 136
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 48,
            'ProCost': 46
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 27
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 150,
            'ProCost': 100
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 60,
            'ProCost': 43
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 15,
            'ProCost': 27
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 107,
            'ProCost': 97
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 204,
            'ProCost': 136
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 210,
            'ProCost': 111
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 65,
            'ProCost': 47
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 26,
            'ProCost': 45
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 112,
            'ProCost': 115
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 54,
            'ProCost': 66
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 36
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 112
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 261,
            'ProCost': 149
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 226,
            'ProCost': 124
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 72,
            'ProCost': 63
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 35,
            'ProCost': 33
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 144,
            'ProCost': 118
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 293,
            'ProCost': 118
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 237,
            'ProCost': 110
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 36,
            'ProCost': 50
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 36
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 120,
            'ProCost': 95
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 59
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 33
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 147,
            'ProCost': 96
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 230,
            'ProCost': 100
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 236,
            'ProCost': 104
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 60,
            'ProCost': 57
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 33,
            'ProCost': 41
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 105
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 31,
            'ProCost': 55
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 30
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 117,
            'ProCost': 106
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 259,
            'ProCost': 127
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 294,
            'ProCost': 126
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 51,
            'ProCost': 63
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 21,
            'ProCost': 45
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 102,
            'ProCost': 108
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 77,
            'ProCost': 64
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 29,
            'ProCost': 26
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 140,
            'ProCost': 88
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 244,
            'ProCost': 144
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 213,
            'ProCost': 127
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 69,
            'ProCost': 40
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 30,
            'ProCost': 33
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 116,
            'ProCost': 103
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 79,
            'ProCost': 47
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 29,
            'ProCost': 37
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 116,
            'ProCost': 96
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 295,
            'ProCost': 108
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 225,
            'ProCost': 127
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 57
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 37,
            'ProCost': 49
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 138,
            'ProCost': 118
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 47
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 42
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 131,
            'ProCost': 91
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 115
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 275,
            'ProCost': 109
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 46,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 40,
            'ProCost': 43
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 112,
            'ProCost': 105
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 40
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 31
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 119,
            'ProCost': 87
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 298,
            'ProCost': 148
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 200,
            'ProCost': 107
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 30,
            'ProCost': 42
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 22,
            'ProCost': 49
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 148,
            'ProCost': 88
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 37,
            'ProCost': 49
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 29
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 130,
            'ProCost': 102
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 129
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 113
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 80,
            'ProCost': 60
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 39,
            'ProCost': 27
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 119,
            'ProCost': 93
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 42,
            'ProCost': 46
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 37
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 126,
            'ProCost': 96
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 222,
            'ProCost': 150
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 228,
            'ProCost': 105
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 54,
            'ProCost': 49
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 33
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 145,
            'ProCost': 110
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 35,
            'ProCost': 41
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 16,
            'ProCost': 38
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 118,
            'ProCost': 114
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 110
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 281,
            'ProCost': 136
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 50,
            'ProCost': 66
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 23,
            'ProCost': 26
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 129,
            'ProCost': 98
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 78,
            'ProCost': 53
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 28,
            'ProCost': 31
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 147,
            'ProCost': 120
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 240,
            'ProCost': 100
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 232,
            'ProCost': 116
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 49
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 18,
            'ProCost': 36
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 114,
            'ProCost': 113
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 52,
            'ProCost': 63
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 31,
            'ProCost': 25
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 129,
            'ProCost': 88
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 263,
            'ProCost': 111
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 105
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 55,
            'ProCost': 60
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 13,
            'ProCost': 30
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 134,
            'ProCost': 107
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Hydro-electric',
            'PowUnits': 33,
            'ProCost': 69
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Geo-thermal',
            'PowUnits': 20,
            'ProCost': 31
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Solar',
            'PowUnits': 146,
            'ProCost': 109
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Free Energy',
            'EneSource': 'Wind',
            'PowUnits': 241,
            'ProCost': 107
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 10,
            'ProCost': 30
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 38,
            'ProCost': 65
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 6,
            'ProCost': 24
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 72,
            'ProCost': 86
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 13,
            'ProCost': 20
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 34,
            'ProCost': 54
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 20
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 12,
            'ProCost': 26
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 48,
            'ProCost': 57
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 29
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 61,
            'ProCost': 97
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 29
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 40,
            'ProCost': 47
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 24
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 45,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 4,
            'ProCost': 25
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 72,
            'ProCost': 82
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 29
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 32,
            'ProCost': 42
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 20
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 25
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 43,
            'ProCost': 66
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 26
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 86,
            'ProCost': 87
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 16,
            'ProCost': 22
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 43,
            'ProCost': 54
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 6,
            'ProCost': 22
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 15,
            'ProCost': 20
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 40,
            'ProCost': 55
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 3,
            'ProCost': 24
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 60,
            'ProCost': 87
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 12,
            'ProCost': 29
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 37,
            'ProCost': 50
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 3,
            'ProCost': 20
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 17,
            'ProCost': 21
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 38,
            'ProCost': 53
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 8,
            'ProCost': 27
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 88,
            'ProCost': 92
        },
        {
            'Date': '2/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 14,
            'ProCost': 22
        },
        {
            'Date': '3/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 31,
            'ProCost': 69
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 2,
            'ProCost': 22
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 16,
            'ProCost': 29
        },
        {
            'Date': '7/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 35,
            'ProCost': 54
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 24
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 79,
            'ProCost': 82
        },
        {
            'Date': '12/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 10,
            'ProCost': 29
        },
        {
            'Date': '1/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 50,
            'ProCost': 65
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 5,
            'ProCost': 25
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 17,
            'ProCost': 28
        },
        {
            'Date': '5/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 46,
            'ProCost': 54
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 63,
            'ProCost': 84
        },
        {
            'Date': '10/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 28
        },
        {
            'Date': '11/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 47,
            'ProCost': 52
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 8,
            'ProCost': 23
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 28
        },
        {
            'Date': '3/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 40,
            'ProCost': 55
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 7,
            'ProCost': 27
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 67,
            'ProCost': 88
        },
        {
            'Date': '8/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 20,
            'ProCost': 29
        },
        {
            'Date': '9/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 38,
            'ProCost': 61
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 21
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 11,
            'ProCost': 26
        },
        {
            'Date': '1/1/2018',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 36,
            'ProCost': 60
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 2,
            'ProCost': 24
        },
        {
            'Date': '1/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 83,
            'ProCost': 90
        },
        {
            'Date': '4/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 11,
            'ProCost': 27
        },
        {
            'Date': '5/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 49,
            'ProCost': 42
        },
        {
            'Date': '6/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 28
        },
        {
            'Date': '8/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 13,
            'ProCost': 25
        },
        {
            'Date': '9/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 30,
            'ProCost': 49
        },
        {
            'Date': '10/1/2015',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 4,
            'ProCost': 26
        },
        {
            'Date': '11/1/2015',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 76,
            'ProCost': 87
        },
        {
            'Date': '2/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 19,
            'ProCost': 27
        },
        {
            'Date': '3/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 45,
            'ProCost': 55
        },
        {
            'Date': '4/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 1,
            'ProCost': 23
        },
        {
            'Date': '6/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 23
        },
        {
            'Date': '7/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 34,
            'ProCost': 51
        },
        {
            'Date': '8/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 3,
            'ProCost': 28
        },
        {
            'Date': '9/1/2016',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 85,
            'ProCost': 80
        },
        {
            'Date': '12/1/2016',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 20,
            'ProCost': 22
        },
        {
            'Date': '1/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 40,
            'ProCost': 51
        },
        {
            'Date': '2/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 7,
            'ProCost': 25
        },
        {
            'Date': '4/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 15,
            'ProCost': 21
        },
        {
            'Date': '5/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 36,
            'ProCost': 41
        },
        {
            'Date': '6/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 1,
            'ProCost': 27
        },
        {
            'Date': '7/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 79,
            'ProCost': 93
        },
        {
            'Date': '10/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wastage',
            'PowUnits': 11,
            'ProCost': 28
        },
        {
            'Date': '11/1/2017',
            'Sector': 'Public Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Ethanol Fuel',
            'PowUnits': 41,
            'ProCost': 51
        },
        {
            'Date': '12/1/2017',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Bio-diesel',
            'PowUnits': 8,
            'ProCost': 28
        },
        {
            'Date': '2/1/2018',
            'Sector': 'Private Sector',
            'EnerType': 'Biomass',
            'EneSource': 'Wood',
            'PowUnits': 20,
            'ProCost': 23
        }
    ];
    
    exports.renewableEnergy = getClassDate(rData);
    function getClassDate(data) {
        var date;
        for (var ln = 0, lt = data.length; ln < lt; ln++) {
            date = new Date(data[ln].Date.toString());
            var dtYr = date.getFullYear();
            var dtMn = date.getMonth();
            var dtdv = (dtMn + 1) / 3;
            data[ln].Year = 'FY ' + dtYr;
            data[ln].Quarter = dtdv <= 1 ? 'Q1 ' + ('FY ' + dtYr) : dtdv <= 2 ? 'Q2 ' + ('FY ' + dtYr) :
                dtdv <= 3 ? 'Q3 ' + ('FY ' + dtYr) : 'Q4 ' + ('FY ' + dtYr);
            data[ln].HalfYear = (dtMn + 1) / 6 <= 1 ? 'H1 ' + ('FY ' + dtYr) : 'H2' + ('FY ' + dtYr);
            delete (data[ln].Date);
        }
        return data;
    }
});
