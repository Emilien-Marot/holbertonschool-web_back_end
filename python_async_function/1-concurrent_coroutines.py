#!/usr/bin/env python3
"""
here you go
"""


async def wait_n(n: int, max_delay: int) -> list[float]:
    """
    here we go
    :param n
    :param max_delay:
    :return:
    """
    list_delay = []
    wait_random = __import__('0-basic_async_syntax').wait_random
    for i in range(0, n):
        delay = await wait_random(max_delay)
        list_delay.append(delay)
    sorted_list = []
    for i in range(0, n):
        min_delay = min(list_delay)
        list_delay.remove(min_delay)
        sorted_list.append(min_delay)
    return sorted_list
