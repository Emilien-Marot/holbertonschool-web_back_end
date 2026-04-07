#!/usr/bin/env python3
'''
Here you go
'''
import typing


def element_length(lst: typing.Iterable[typing.Sequence])\
        -> typing.List[typing.Tuple[typing.Sequence, int]]:
    '''
    here we go
    :param lst:
    :return:
    '''
    return [(i, len(i)) for i in lst]
