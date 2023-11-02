import { Observable } from '@nativescript/core'

const viewModel = new Observable();

function onUnitOfMeasureGroupTap(args)
{
    //нужно массив величин измерения извлекать по id группы
    Frame.topmost().navigate({
        moduleName: 'some-name',
        context: {}
    })
}

export function createViewModel()
{
    viewModel.onUnitOfMeasureGroupTap = onUnitOfMeasureGroupTap;
    return viewModel;
}
