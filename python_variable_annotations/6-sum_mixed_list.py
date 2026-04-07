#!/usr/bin/env python3
'''
Here you go
'''
import typing


def sum_mixed_list(mxd_lst: typing.List[typing.Union[int, float]]) -> float:
    '''
    here we go
    :param mxd_lst:
    :return:
    '''
    sum: float = 0
    for val in mxd_lst:
        sum += val
    return sum
