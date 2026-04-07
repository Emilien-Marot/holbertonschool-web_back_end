#!/usr/bin/env python3
'''
Here you go
'''
import typing


def sum_list(input_list: typing.List[float]) -> float:
    '''
    here we go
    :param input_list:
    :return:
    '''
    sum: float = 0
    for val in input_list:
        sum += val
    return sum
