import { Observable } from '@nativescript/core'
import {Frame} from "@nativescript/core";
import {
    getIdentifiersOfAngleUnitsOfMeasure,
    getIdentifiersOfAreaUnitsOfMeasure,
    getIdentifiersOfLengthUnitsOfMeasure,
    getIdentifiersOfPressureUnitsOfMeasure,
    getIdentifiersOfStorageUnitsOfMeasure, getIdentifiersOfTimeUnitsOfMeasure,
    getIdentifiersOfVolumeUnitsOfMeasure, getIdentifiersOfWeightUnitsOfMeasure
} from "~/Model/UnitsOfMeasure/IdentifiersOfUnitsOfMeasureFromCertainGroup";

const viewModel = new Observable();
const CONVERTATION_PAGE_PATH = '/View/UnitOfMeasureConvertation/convertation';

function navigateToConvertationPage(unitsOfMeasureIdentifiers, conversationTitle)
{
    Frame.topmost().navigate({
        moduleName: CONVERTATION_PAGE_PATH,
        context: {
            unitsOfMeasureIdentifiers: unitsOfMeasureIdentifiers,
            conversationTitle: conversationTitle
        }
    })
}

function openConvertationForLengthUnitsOfMeasure()
{
    let ids = getIdentifiersOfLengthUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Длина');
}

function openConvertationForAreaUnitsOfMeasure()
{
    let ids = getIdentifiersOfAreaUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Площадь');
}

function openConvertationForVolumeUnitsOfMeasure()
{
    let ids = getIdentifiersOfVolumeUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Объём');
}

function openConvertationForAngleUnitsOfMeasure()
{
    let ids = getIdentifiersOfAngleUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Углы');
}

function openConvertationForStorageUnitsOfMeasure()
{
    let ids = getIdentifiersOfStorageUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Информация');
}

function openConvertationForPressureUnitsOfMeasure()
{
    let ids = getIdentifiersOfPressureUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Давление');
}

function openConvertationForTimeUnitsOfMeasure()
{
    let ids = getIdentifiersOfTimeUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Время');
}

function openConvertationForWeightUnitsOfMeasure()
{
    let ids = getIdentifiersOfWeightUnitsOfMeasure();
    navigateToConvertationPage(ids, 'Вес');
}

export function createViewModel()
{
    viewModel.openConvertationForLengthUnitsOfMeasure = openConvertationForLengthUnitsOfMeasure;
    viewModel.openConvertationForAreaUnitsOfMeasure = openConvertationForAreaUnitsOfMeasure;
    viewModel.openConvertationForVolumeUnitsOfMeasure = openConvertationForVolumeUnitsOfMeasure;
    viewModel.openConvertationForAngleUnitsOfMeasure = openConvertationForAngleUnitsOfMeasure;
    viewModel.openConvertationForStorageUnitsOfMeasure = openConvertationForStorageUnitsOfMeasure;
    viewModel.openConvertationForPressureUnitsOfMeasure = openConvertationForPressureUnitsOfMeasure;
    viewModel.openConvertationForTimeUnitsOfMeasure = openConvertationForTimeUnitsOfMeasure;
    viewModel.openConvertationForWeightUnitsOfMeasure = openConvertationForWeightUnitsOfMeasure;
    return viewModel;
}
