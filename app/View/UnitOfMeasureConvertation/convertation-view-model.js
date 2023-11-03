import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";
import {
    addSymbolToNumberGeneratorFromInput, clearAllInputsFromNumberGenerator, deleteLastInputFromNumberGenerator,
    generateNumberFromInputs,
    getRawInput
} from "~/Model/NumberGeneratorFromInput";

const viewModel = new Observable();

function updateDomObject(objectId, value)
{
    let element = Frame.topmost().getViewById(objectId);
    element.text = value;
}

function updateUnitsOfMeasureValues()
{
    let convertFrom = getRawInput().replace('.', ',');
    updateDomObject('convertFrom', convertFrom);
    //TODO convertTo
}

function inputNumberPart(args)
{
    let number = args.object.text;
    addSymbolToNumberGeneratorFromInput(number);
    updateUnitsOfMeasureValues();
}

function clearInput()
{
    clearAllInputsFromNumberGenerator();
    updateUnitsOfMeasureValues();
}

function deleteLastNumberPart()
{
    deleteLastInputFromNumberGenerator();
    updateUnitsOfMeasureValues();
}

export function createViewModel(context)
{
    viewModel.title = context.conversationTitle;
    viewModel.goBack = Frame.goBack;
    viewModel.inputNumberPart = inputNumberPart;
    viewModel.clearInput = clearInput;
    viewModel.deleteLastNumberPart = deleteLastNumberPart;
    return viewModel;
}
