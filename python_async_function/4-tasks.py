#!/usr/bin/env python3
"""
here you go
"""
import typing


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    """
    here we go
    :param n
    :param max_delay:
    :return:
    """
    list_delay = []
    task_wait_random = __import__('3-tasks').task_wait_random
    for i in range(0, n):
        task = task_wait_random(max_delay)
        delay = await task
        list_delay.append(delay)
    sorted_list = []
    for i in range(0, n):
        min_delay = min(list_delay)
        list_delay.remove(min_delay)
        sorted_list.append(min_delay)
    return sorted_list
