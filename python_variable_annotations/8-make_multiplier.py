#!/usr/bin/env python3
'''
Here you go
'''
import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    '''
    here we go
    :param multiplier:
    :return:
    '''
    return lambda n: multiplier * n
