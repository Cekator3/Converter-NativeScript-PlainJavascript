import {Observable} from "@nativescript/core";
import {Frame} from "@nativescript/core";

const viewModel = new Observable();

export function createViewModel(context)
{
    viewModel.title = context.conversationTitle;
    viewModel.goBack = Frame.goBack;
    return viewModel;
}
