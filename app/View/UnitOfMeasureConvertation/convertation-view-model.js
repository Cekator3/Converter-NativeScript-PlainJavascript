import {Observable} from "@nativescript/core";
import {getUnitsOfMeasureNames} from "~/Model/UnitsOfMeasure/UnitsOfMeasureNames";
import {Frame} from "@nativescript/core";

const viewModel = new Observable();

export function createViewModel(context)
{
    viewModel.unitsOfMeasureIdentifiers = context.unitsOfMeasureIdentifiers;
    viewModel.unitsOfMeasureNames = getUnitsOfMeasureNames(context.unitsOfMeasureIdentifiers);
    viewModel.title = context.conversationTitle;
    viewModel.goBack = Frame.goBack;
    return viewModel;
}
