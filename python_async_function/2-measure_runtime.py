#!/usr/bin/env python3
"""
here you go
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    here we go
    :param n
    :param max_delay:
    :return:
    """
    time_0 = time.time()
    asyncio.run(wait_n(n, max_delay))
    time_tot = time.time() - time_0
    return time_tot / n
