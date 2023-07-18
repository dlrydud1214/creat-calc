import { CalcItemType } from "@/type/calc";

export const CACLCULATOR_COLUMNS = 4;

export const calcArr:CalcItemType[] = [ 
    {
        type: 'operator',
        value : 'AC',
        color : 'fill-gray-300',
    },
    {
        type: 'operator',
        value : '+/-',
        color : 'fill-gray-300',
    },
    {
        type: 'operator',
        value : '%',
        color : 'fill-gray-300',
    },
    {
        type: 'operator',
        value : '÷',
        color : 'fill-amber-900',
    },
    {
        type: 'number',
        value : 7,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 8,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 9,
        color : 'fill-gray-800',
    },
    {
        type: 'operator',
        value : 'X',
        color : 'fill-amber-900',
    },
    {
        type: 'number',
        value : 4,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 5,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 6,
        color : 'fill-gray-800',
    },
    {
        type: 'operator',
        value : '-',
        color : 'fill-amber-900',
    },
    {
        type: 'number',
        value : 1,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 2,
        color : 'fill-gray-800',
    },
    {
        type: 'number',
        value : 3,
        color : 'fill-gray-800',
    },
    {
        type: 'operator',
        value : '+',
        color : 'fill-amber-900',
    },
    {
        type: 'number',
        value : 0,
        color : 'fill-gray-800',
        halfwidth: true
    },
    {
        type: 'number',
        value : ".",
        color : 'fill-gray-800',
    },
    {
        type: 'operator',
        value : "=",
        color : 'fill-amber-900',
    },
]